import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";
import { URL } from "node:url";

const page = readFileSync(
  new URL("../dist/temas/horoscopos/index.html", import.meta.url),
  "utf8",
);
const signs = [
  "aries",
  "tauro",
  "geminis",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "escorpion",
  "sagitario",
  "capricornio",
  "acuario",
  "piscis",
];
// Text-node fingerprints from the published catalogue before the layout change.
// Ordering is ignored because representation now belongs to the identity header.
const textFingerprints = [
  "c1104a176d6ddf4dfcb95f2bf489f7b817bc31389e194ec818a850668f8a9982",
  "f6368fc27796eca8ceef3973d91cd0b4412818a6379f5603e73a6134ddfdc09f",
  "aa211e0d7b7738d5961661c431655f3572d4466cedd1685f11dc8e5d10385964",
  "07643eab9232de3a813c035e03d518a6588493a102c682791850882b0475c946",
  "16ea6a920ab69cb136bfa7e03cf08cfd024c5e0c9dd705e3a76f1d09e0fd128f",
  "5571b157062766525c2f23d5d211405c4d066326fe49fc56ae39d0adc31476d5",
  "ed3d578d137b565175ef3c4623b0686c48aa703e195fff245499180674df2f3c",
  "0f765c58da4a061cc2aba131fcc853df260308ce049b9df38694cb143242652d",
  "0a0028d180ddc1330990f4a3f8088be4714ad264e0a0087655a4c7b7c0031a76",
  "c778db8d53e4c82a1a0814d192ed1b3e8dad8cc2a9b7542adf103303ff092961",
  "7ebd45884d32ac2c631a4709c7eba2bf719865dc258f262fa053ddba5ffdc07d",
  "e66c53deb12969b653099c4d7653c3ade7c1b70e98f52c4c9daca19ea78c9149",
];
const cards = [
  ...page.matchAll(
    /<article\b([^>]*\bid="signo-[^"]+"[^>]*)>([\s\S]*?)<\/article>/g,
  ),
];

test("Chinese animal cards do not display added hourly ranges", () => {
  const chinesePanel = page.slice(
    page.indexOf('id="chino"'),
    page.indexOf('id="maya"'),
  );
  assert.ok(chinesePanel.length > 0);
  assert.doesNotMatch(chinesePanel, /\b\d{2}:\d{2}\s*[-–]\s*\d{2}:\d{2}\b/);
});

// Years transcribed from RO: horoscopos_chinacuadroanual.htm, without extrapolation.
// RO labels Conejo, Cordero and Cerdo map to existing gato, cabra and jabali IDs.
const originalChineseYears = {
  rata: [1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008],
  bufalo: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009],
  tigre: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010],
  gato: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011],
  dragon: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012],
  serpiente: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013],
  caballo: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014],
  cabra: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015],
  mono: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016],
  gallo: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017],
  perro: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018],
  jabali: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019],
};

test("all twelve Chinese animal headers display exactly the years from RO", () => {
  const headers = [
    ...page.matchAll(
      /data-chinese-animal="([^"]+)"[^>]*>([\s\S]*?)data-chinese-years[^>]*>([\s\S]*?)<\/p>/g,
    ),
  ];
  assert.deepEqual(
    headers.map((header) => header[1]),
    Object.keys(originalChineseYears),
  );
  for (const [, id, , yearsMarkup] of headers) {
    assert.match(yearsMarkup, /Años:/);
    assert.deepEqual(
      (yearsMarkup.match(/\b(?:19|20)\d{2}\b/g) ?? []).map(Number),
      originalChineseYears[id],
      id,
    );
  }
});

test("catalogue uses the title found in RO", () => {
  assert.match(page, />\s*Los Doce Signos del Zodiaco\s*<\/h4>/);
  assert.doesNotMatch(page, /Catálogo Exhaustivo/);
});

test("catalogue and index retain zodiac order and unique destinations", () => {
  assert.equal(cards.length, 12);
  assert.deepEqual(
    cards.map((card) => card[1].match(/\bid="([^"]+)"/)[1]),
    signs.map((id) => `signo-${id}`),
  );
  const nav = page.match(
    /<nav\b[^>]*class="zodiac-index"[^>]*>([\s\S]*?)<\/nav>/,
  )[1];
  assert.deepEqual(
    [...nav.matchAll(/href="#signo-([^"]+)"/g)].map((m) => m[1]),
    signs,
  );
});

for (const [index, id] of signs.entries()) {
  test(`${id}: accessible header, four facts and all existing text preserved`, () => {
    const [, attrs, content] = cards[index];
    assert.ok(attrs.includes(`aria-labelledby="signo-${id}-titulo"`));
    assert.ok(attrs.includes('tabindex="-1"'));
    const header = content.match(/<header\b[^>]*>([\s\S]*?)<\/header>/)[1];
    assert.match(header, /<img\b/);
    assert.ok(header.includes(`id="signo-${id}-titulo"`));
    assert.equal([...header.matchAll(/<dt\b/g)].length, 4);
    assert.ok(content.includes('class="zodiac-card-body space-y-6"'));
    const text = content
      .replace(/<[^>]+>/g, "\n")
      .split("\n")
      .map((value) => value.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .sort()
      .join("\n");
    assert.equal(
      createHash("sha256").update(text).digest("hex"),
      textFingerprints[index],
    );
  });
}
