import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { URL } from "node:url";

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
const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const css = read("src/styles/topic-pastels.css");
const identities = read("src/styles/topic-identities.css");
const rgb = (hex) =>
  [1, 3, 5].map((i) => Number.parseInt(hex.slice(i, i + 2), 16));
const mix = (a, b, amount) => a.map((v, i) => v * amount + b[i] * (1 - amount));
const luminance = (color) =>
  color
    .map((v) => {
      const c = v / 255;
      return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    })
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
const contrast = (a, b) =>
  (Math.max(luminance(a), luminance(b)) + 0.05) /
  (Math.min(luminance(a), luminance(b)) + 0.05);

for (const slug of topics) {
  test(`${slug}: pastel treatment is enabled once on the topic article`, () => {
    const page = read(`dist/temas/${slug}/index.html`);
    const root = page.match(/<article\b[^>]*data-topic-theme="[^"]+"[^>]*>/)[0];
    assert.ok(root.includes("data-topic-pastel"));
    assert.equal(
      [...page.matchAll(/\bdata-topic-pastel(?:=|\s|>)/g)].length,
      1,
    );
  });
}

for (const slug of [
  "astrologia-occidental",
  "antecedentes-historicos",
  "vision-caldea",
  "ecliptica",
  "zodiaco-signos",
  "astros",
  "que-es-carta-astral",
  "tu-carta-astral",
]) {
  test(`${slug}: internal article keeps the Astrology pastel treatment`, () => {
    const page = read(`dist/temas/astrologia/${slug}/index.html`);
    assert.match(
      page,
      /<article\b[^>]*data-topic-theme="astrologia"[^>]*data-topic-pastel/,
    );
  });
}

test("homepage, petition pages and administration do not opt in", () => {
  for (const path of [
    "index.html",
    "peticiones/index.html",
    "peticiones/confirmar/index.html",
    "peticiones/estado/index.html",
    "admin/peticiones/index.html",
    "en-construccion/index.html",
  ]) {
    assert.doesNotMatch(
      read(`dist/${path}`),
      /\bdata-topic-pastel(?:=|\s|>)/,
      path,
    );
  }
});

test("pastel CSS is restricted to reading content, without textures or new hue constants", () => {
  assert.doesNotMatch(css, /background-image|url\(/);
  assert.deepEqual(
    [...css.matchAll(/#[\da-f]{3,8}\b/gi)]
      .map((m) => m[0])
      .filter((value) => !["#fffdf8", "#fff"].includes(value)),
    [],
  );
  for (const [, selector] of css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .matchAll(/(?:^|\})([^{}]+)\{/g)) {
    if (selector.trim().startsWith("@")) continue;
    assert.match(selector, /\[data-topic-pastel\].*> section\.text-paper-ink/s);
  }
  assert.match(css, /--topic-pastel-paper:[^;]*\b8%/);
  assert.match(css, /--topic-pastel-card:[^;]*\b16%/);
  assert.match(css, /--topic-pastel-raised:[^;]*\b3%/);
  assert.match(css, /--topic-pastel-hover:[^;]*\b22%/);
});

for (const slug of topics) {
  test(`${slug}: dark text, links and headings remain readable on all pastel surfaces`, () => {
    const block = identities.match(
      new RegExp(`\\[data-topic-link="${slug}"\\]\\)\\s*\\{([^}]+)`),
    )[1];
    const value = (name) =>
      rgb(block.match(new RegExp(`--topic-${name}:\\s*(#[\\da-f]{6})`))[1]);
    const seed =
      slug === "historia"
        ? mix(value("base"), value("detail"), 0.35)
        : value("base");
    for (const amount of [0.03, 0.08, 0.16, 0.22]) {
      const surface = mix(seed, rgb("#fffdf8"), amount);
      for (const text of [rgb("#101923"), rgb("#4b5358"), value("ink")]) {
        assert.ok(
          contrast(text, surface) >= 4.5,
          `${slug}: surface ${amount}, ratio ${contrast(text, surface)}`,
        );
      }
    }
  });
}
