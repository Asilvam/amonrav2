import assert from "node:assert/strict";
import { decodeHTML } from "entities";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";
import { URL } from "node:url";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url));
const page = read("dist/temas/amuletos/index.html").toString();
const plain = (html) =>
  decodeHTML(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

test("Amulets introduction keeps all twelve original paragraphs in a single reading block", () => {
  assert.equal([...page.matchAll(/class="amulets-intro-copy /g)].length, 1);
  const copy = page.match(
    /class="amulets-intro-copy [^"]*"[^>]*>([\s\S]*?)<\/div>/,
  )[1];
  assert.equal([...copy.matchAll(/<p\b/g)].length, 12);
  assert.doesNotMatch(copy, /<img\b|<figure\b/);
  assert.doesNotMatch(page, /amulets-intro-row--image-first/);
  const gallery = page.match(
    /class="amulets-intro-gallery"[^>]*>([\s\S]*?)<\/div>/,
  )[1];
  assert.equal([...gallery.matchAll(/<figure\b/g)].length, 2);
  assert.match(gallery, /data-amulet-image="colgantes"/);
  assert.match(gallery, /data-amulet-image="medallon"/);
});

test("both content images preserve the supplied source files and uncropped display", () => {
  for (const [id, hash] of [
    [
      "colgantes",
      "13f9cda86f4262b5bd173e0923a464075999a4ca015d98a21517317070349657",
    ],
    [
      "medallon",
      "9993a3690185d8f2bda161584a4a0fb82666d9e58d6cf207c7aa0f84b3eca354",
    ],
  ]) {
    assert.equal(
      createHash("sha256")
        .update(read(`src/assets/amonra/amuletos-${id}.png`))
        .digest("hex"),
      hash,
    );
    const figure = page.match(
      new RegExp(`data-amulet-image="${id}"[^>]*>([\\s\\S]*?)<\\/figure>`),
    )[1];
    assert.match(figure, /<img\b/);
    assert.match(figure, /object-contain/);
    assert.match(figure, /h-auto/);
    assert.match(figure, /loading="lazy"/);
  }
});
test("the merged copy preserves the RO transcription without editorial rewrites", () => {
  const original = JSON.parse(read("src/config/amulets-original.json"));
  assert.equal(
    createHash("sha256").update(JSON.stringify(original)).digest("hex"),
    "ee7d97cefee334bfaaa994a54c060d917b3f8d173cc633153d2eaf2ac0166872",
  );
  assert.deepEqual(
    [
      original.introduction.length,
      original.amulets.length,
      original.talismans.length,
      original.usage.length,
    ],
    [2, 12, 9, 4],
  );
  const renderedParagraphs = [
    ...page.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g),
  ].map((match) => plain(match[1]));
  for (const paragraph of [
    ...original.introduction,
    ...original.amulets,
    ...original.talismans,
    ...original.usage,
  ]) {
    assert.equal(
      renderedParagraphs.filter((text) => text === paragraph).length,
      1,
      paragraph,
    );
  }
  assert.doesNotMatch(
    page,
    /La tradición recomienda no acumular objetos sin criterio/,
  );
});

test("the seven original planetary correspondences appear once outside the catalogue tabs", () => {
  const original = JSON.parse(read("src/config/amulets-original.json"));
  const tables = [
    ...page.matchAll(
      /<table\b[^>]*data-original-correspondences[^>]*>([\s\S]*?)<\/table>/g,
    ),
  ];
  assert.equal(tables.length, 1);
  const rows = [...tables[0][1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(
    (row) =>
      [...row[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/g)].map((cell) =>
        plain(cell[1]),
      ),
  );
  assert.deepEqual(rows, [
    original.correspondences.headers,
    ...original.correspondences.rows,
  ]);
  assert.equal(
    [...page.matchAll(/Correspondencias tradicionales por planeta/g)].length,
    1,
  );
  assert.ok(
    page.indexOf("data-original-correspondences") <
      page.indexOf('id="indice-amuletos"'),
  );
});

test("the existing catalogue wording stays unchanged", () => {
  const start = page.search(/<div\b[^>]*class="tab-panels[^"]*"/);
  assert.ok(start > 0);
  const fragment = page.slice(start);
  let depth = 0;
  let end = -1;
  for (const tag of fragment.matchAll(/<\/?div\b[^>]*>/g)) {
    depth += tag[0].startsWith("</") ? -1 : 1;
    if (depth === 0) {
      end = tag.index + tag[0].length;
      break;
    }
  }
  assert.ok(end > 0);
  assert.equal(
    createHash("sha256")
      .update(plain(fragment.slice(0, end)))
      .digest("hex"),
    "4da741c73736d63ca9fca512c72ca007c4d48d53bb2a0cf630789c89554a8699",
  );
});

test("the hero includes the current image and the supplied winged goddess without modifying either source", () => {
  const carousel = page.match(
    /<amonra-image-carousel\b[^>]*>([\s\S]*?)<\/amonra-image-carousel>/,
  )[1];
  assert.equal([...carousel.matchAll(/<figure\b/g)].length, 2);
  assert.match(carousel, /amuletos-hero-egipcio/);
  assert.match(carousel, /amuletos-diosa-alada/);
  assert.doesNotMatch(carousel, /data-carousel-go|data-carousel-select=/);
  assert.match(carousel, /data-carousel-play/);
  const component = read(
    "src/components/common/ImageCarousel.astro",
  ).toString();
  assert.match(component, /clip-path: inset\(50%\)/);
  assert.match(component, /}, 6000\)/);
  assert.match(carousel, /aria-live="polite"/);
  for (const [file, hash] of [
    [
      "amuletos-hero-egipcio.png",
      "dc39d8f1b045812993cfd7e84b9bf8cab99c233d618df538b769adc8256de806",
    ],
    [
      "amuletos-diosa-alada.png",
      "b9df9f2f57c23dd283d57407b2a6cfdb41f3115a26f813c764bd7b88c09bb13e",
    ],
  ])
    assert.equal(
      createHash("sha256")
        .update(read(`src/assets/amonra/${file}`))
        .digest("hex"),
      hash,
    );
});
