import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { URL } from "node:url";
import sharp from "sharp";

const topics = [
  "fundacion",
  "historia",
  "amuletos",
  "astrologia",
  "gemas",
  "horoscopos",
  "inciensos",
  "magia",
  "numerologia",
  "oraculos",
  "runas",
  "suenos",
  "tarot",
  "terapias",
  "velas",
];
const root = new URL("../", import.meta.url);
const html = (path) => readFileSync(new URL(`dist/${path}`, root), "utf8");
const attribute = (attrs, name) =>
  attrs.match(new RegExp(`${name}="([^"]*)"`))?.[1];
const links = (markup) =>
  [...markup.matchAll(/<a\b([^>]*\bdata-topic-link="[^"]+"[^>]*)>/g)].map(
    (match) => ({
      slug: attribute(match[1], "data-topic-link"),
      variant: attribute(match[1], "data-topic-variant"),
      href: attribute(match[1], "href"),
    }),
  );

test("homepage contains one themed menu link per destination", () => {
  const menu = links(html("index.html"));
  assert.equal(menu.length, topics.length);
  assert.deepEqual(menu.map((link) => link.slug).sort(), [...topics].sort());
  for (const link of menu) {
    assert.equal(link.variant, "menu");
    assert.equal(link.href, `/temas/${link.slug}/`);
  }
});

for (const [index, slug] of topics.entries()) {
  test(`${slug}: previous/next identities match their destinations`, () => {
    const page = html(`temas/${slug}/index.html`);
    const nav = page.match(
      /<nav\b[^>]*aria-label="Continuar por los temas de Amonra"[^>]*>([\s\S]*?)<\/nav>/,
    )?.[1];
    assert.ok(nav, "topic navigation exists");
    assert.equal([...nav.matchAll(/<a\b/g)].length, 2);
    const expected = [];
    if (index > 0)
      expected.push({
        slug: topics[index - 1],
        variant: "previous",
        href: `/temas/${topics[index - 1]}/`,
      });
    if (index < topics.length - 1)
      expected.push({
        slug: topics[index + 1],
        variant: "next",
        href: `/temas/${topics[index + 1]}/`,
      });
    assert.deepEqual(links(nav), expected);
    assert.equal(
      [...nav.matchAll(/href="\/"/g)].length,
      index === 0 || index === topics.length - 1 ? 1 : 0,
    );
    const heroTheme = page.match(
      /<article\b[^>]*data-topic-theme="([^"]+)"/,
    )?.[1];
    assert.equal(
      heroTheme,
      ["runas", "magia", "inciensos"].includes(slug) ? slug : undefined,
    );
  });
}

const styleUrl = new URL("src/styles/topic-identities.css", root);
const css = readFileSync(styleUrl, "utf8");
const identities = [
  ...css.matchAll(/\[data-topic-link="([^"]+)"\]\)\s*\{([^}]+)\}/g),
];

test("every destination has one shared identity", () => {
  assert.deepEqual(
    identities.map((identity) => identity[1]).sort(),
    [...topics].sort(),
  );
});

const rgb = (hex) =>
  [1, 3, 5].map((index) => Number.parseInt(hex.slice(index, index + 2), 16));
const luminance = (color) =>
  color
    .map((channel) => {
      const value = channel / 255;
      return value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    })
    .reduce(
      (sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index],
      0,
    );

for (const [, slug, declarations] of identities) {
  test(`${slug}: texture exists and all sampled backgrounds meet 4.5:1`, async () => {
    const value = (name) =>
      declarations.match(new RegExp(`--topic-${name}:\\s*([^;]+);`))?.[1];
    const texture = value("texture")?.match(/url\("([^"]+)"\)/)?.[1];
    assert.ok(texture);
    const foreground = value("hero-text");
    assert.match(foreground, /^#[\da-f]{6}$/i);
    const foregroundLuminance = luminance(rgb(foreground));
    const stops = ["veil-start", "veil-end"].map((name) => {
      const color = value(name)?.match(
        /rgb\((\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\d.]+)%\)/,
      );
      assert.ok(color, name);
      return {
        color: color.slice(1, 4).map(Number),
        alpha: Number(color[4]) / 100,
      };
    });
    const { data, info } = await sharp(readFileSync(new URL(texture, styleUrl)))
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    let minimum = Infinity;
    for (let pixel = 0; pixel < data.length; pixel += info.channels) {
      for (const stop of stops) {
        const background = [0, 1, 2].map(
          (channel) =>
            stop.alpha * stop.color[channel] +
            (1 - stop.alpha) * data[pixel + channel],
        );
        const backgroundLuminance = luminance(background);
        const contrast =
          (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) /
          (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
        minimum = Math.min(minimum, contrast);
      }
    }
    assert.ok(minimum >= 4.5, `${slug}: ${minimum.toFixed(2)}:1`);
  });
}
