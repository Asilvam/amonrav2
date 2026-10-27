import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { URL } from "node:url";
import { runInNewContext } from "node:vm";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";
const candleExports = {};
const candleSource = ts.transpileModule(
  readFileSync(
    new URL("../src/components/velas/candle-room.ts", import.meta.url),
    "utf8",
  ),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;
const candleRoom = runInNewContext(candleSource + "\nmodule.exports", {
  module: { exports: candleExports },
  exports: candleExports,
});
test("extinguished candle colors compose their original filter instead of replacing it with grayscale", () => {
  const css = read("src/components/velas/velas.css");
  for (const color of ["ambar", "rosa", "azul"]) {
    const rule = css.match(
      new RegExp(
        '\\.candle-photo\\[data-color="' +
          color +
          '"\\] \\.candle-photo__image\\s*{([^}]+)}',
      ),
    )?.[1];
    assert.ok(rule, color);
    assert.match(rule, /--candle-color-filter:/);
  }
  const outRule = css.match(
    /\.candle-room-card\.is-out \.candle-photo__image\s*{([^}]+)}/,
  )[1];
  assert.match(outRule, /var\(\s*--candle-color-filter/);
  assert.doesNotMatch(outRule, /grayscale/);
});

test("Sala de luz is a regular navigation option and the completion link follows the site CTA style", () => {
  const header = read("src/components/amonra/AmonraHeader.astro");
  assert.match(header, /label: "Sala de luz"/);
  assert.match(header, /href: "\/sala-de-velas\/"/);
  assert.doesNotMatch(header, /Sala de luz <span aria-hidden/);
  const source = read("src/components/velas/EncenderVela.tsx");
  const completion = source.slice(
    source.indexOf("{completion && ("),
    source.indexOf('{!completion && stage === "arrival"'),
  );
  assert.match(completion, /href="\/sala-de-velas\/"/);
  assert.match(completion, /className="candle-room-action"/);
  assert.match(completion, /Ver la sala de luz/);
});

const read = (path) =>
  readFileSync(new URL("../" + path, import.meta.url), "utf8");

function component(name) {
  const file = new URL(`../src/components/velas/${name}.tsx`, import.meta.url);
  const source = readFileSync(file, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const module = { exports: {} };
  const require = createRequire(file);
  const load = (name) => {
    if (name === "./candle-room") return candleRoom;
    if (name === "./CandleRoomIcon")
      return { __esModule: true, default: component("CandleRoomIcon") };
    return require(name);
  };
  runInNewContext(`(function(require, module, exports) { ${output}\n})`)(
    load,
    module,
    module.exports,
  );
  return module.exports.default;
}

test("room icons are decorative vector strokes, with accessible names kept on the controls", () => {
  const Icon = component("CandleRoomIcon");
  for (const name of [
    "candle",
    "previous",
    "next",
    "close",
    "retry",
    "sun",
    "sprout",
    "waves",
    "heart",
    "shield",
    "star",
  ]) {
    const html = renderToStaticMarkup(createElement(Icon, { name }));
    assert.match(html, /<svg\b/);
    assert.match(html, /aria-hidden="true"/);
    assert.match(html, /focusable="false"/);
    assert.match(html, /stroke="currentColor"/);
    assert.match(html, /<path\b/);
  }
  const source = read("src/components/velas/SalaVelas.tsx");
  assert.match(source, /className="candle-room-action shrink-0"/);
  assert.doesNotMatch(source, /ritual-primary-button|↗|×|✧/);
  const css = read("src/components/velas/velas.css");
  assert.match(css, /\.candle-room-action\s*{[^}]*var\(--color-clay-ink\)/s);
  assert.match(
    css,
    /\.candle-room-action\s*{[^}]*border-radius: var\(--radius-small\)/s,
  );
  assert.match(css, /\.candle-room-action:focus-visible/);
});

test("lighting flow shares the room actions and vector icons in every step", () => {
  const source = read("src/components/velas/EncenderVela.tsx");
  assert.equal(
    [...source.matchAll(/className="candle-room-action"/g)].length,
    4,
  );
  assert.equal(
    [...source.matchAll(/<CandleRoomIcon name="previous"/g)].length,
    3,
  );
  assert.match(source, /<CandleRoomIcon name={option.symbol}/);
  assert.doesNotMatch(
    source,
    /ritual-primary-button|↗|→|←|rounded-full bg-clay-red/,
  );
  assert.match(source, /disabled={!intention}/);
  assert.match(
    read("src/components/velas/velas.css"),
    /\.candle-room-action:disabled\s*{[^}]*cursor: not-allowed/,
  );
});

test("carousel starts strictly after four candles on every screen, independently for each group", () => {
  for (const count of [0, 1, 2, 3, 4])
    assert.equal(candleRoom.shouldUseCandleCarousel(count), false);
  for (const count of [5, 6, 20, 100])
    assert.equal(candleRoom.shouldUseCandleCarousel(count), true);
});

test("lighting timestamp contains the full local date and hour, with the source instant preserved", () => {
  const startedAt = Date.parse("2026-10-24T18:05:00Z");
  const expected = new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(startedAt);
  assert.equal(candleRoom.formatCandleStartedAt(startedAt), expected);
  const markup = renderToStaticMarkup(
    createElement(component("CandleStartedAt"), { startedAt }),
  );
  assert.match(markup, /<time\b/);
  assert.match(markup, /dateTime="2026-10-24T18:05:00.000Z"/i);
  assert.match(markup, /Encendida:/);
  assert.ok(markup.includes(expected));
});

test("collection keeps every candle in the markup and marks only larger sets for carousel scrolling", () => {
  const Collection = component("CandleCollection");
  for (const count of [1, 4, 5, 12]) {
    const children = Array.from({ length: count }, (_, id) =>
      createElement("article", { key: id }, "Vela " + id),
    );
    const markup = renderToStaticMarkup(
      createElement(
        Collection,
        { count, label: "Llamas encendidas" },
        children,
      ),
    );
    assert.equal([...markup.matchAll(/<article\b/g)].length, count);
    assert.equal(markup.includes("candle-room-grid--carousel"), count > 4);
    assert.doesNotMatch(markup, /setInterval|autoplay/i);
  }
});

test("both candle groups and the selected detail include lighting timestamps, without phase jargon", () => {
  const source = read("src/components/velas/SalaVelas.tsx");
  assert.equal([...source.matchAll(/<CandleStartedAt\b/g)].length, 3);
  assert.equal([...source.matchAll(/<CandleCollection\b/g)].length, 2);
  assert.match(source, /count={litCandles.length}/);
  assert.match(source, /count={extinguishedCandles.length}/);
  assert.doesNotMatch(source, /fase|Fase/);
  assert.doesNotMatch(
    source,
    /formatTimeLeft|getCandleTimeLeft|card__time|min restantes|Se consume en/,
  );
  assert.match(source, /className="candle-room-progress"/);
  assert.match(source, /role="progressbar"/);
  assert.match(source, /aria-label="Progreso de combustión"/);
  assert.match(source, /burningProgress\(candle.startedAt, now\)/);
});

test("mobile cards are centered and scrolling is limited to the collection", () => {
  const css = read("src/components/velas/velas.css");
  assert.match(css, /scroll-snap-type: x mandatory/);
  assert.match(css, /scroll-snap-align: start/);
  assert.match(css, /overscroll-behavior-x: contain/);
  assert.match(css, /\.candle-room-card__visual\s*{[^}]*margin-inline: auto/);
});

test("pagination uses twenty candles per page, including partial last pages", () => {
  const Pagination = component("CandlePagination");
  assert.equal(candleRoom.CANDLE_PAGE_SIZE, 20);
  for (const total of [0, 1, 4, 20]) {
    assert.equal(
      renderToStaticMarkup(
        createElement(Pagination, {
          page: 0,
          total,
          loading: false,
          label: "Luces que descansan",
          onPageChange: () => {},
        }),
      ),
      "",
    );
  }
  for (const [total, page, pages, range] of [
    [21, 0, 2, "1–20"],
    [21, 1, 2, "21–21"],
    [40, 1, 2, "21–40"],
    [41, 2, 3, "41–41"],
  ]) {
    const html = renderToStaticMarkup(
      createElement(Pagination, {
        page,
        total,
        loading: false,
        label: "Luces que descansan",
        onPageChange: () => {},
      }),
    );
    const text = html.replace(/<[^>]*>/g, "");
    assert.ok(text.includes(`Página ${page + 1} de ${pages}`), text);
    assert.ok(text.includes(range), text);
  }
});

test("a partial last page stays a carousel when the group has more than four candles", () => {
  const Collection = component("CandleCollection");
  const html = renderToStaticMarkup(
    createElement(
      Collection,
      { count: 1, total: 21, label: "Luces que descansan" },
      createElement("article", {}, "Última vela"),
    ),
  );
  assert.match(html, /candle-room-grid--carousel/);
  assert.match(html, /data-candle-count="21"/);
  assert.match(html, /data-page-count="1"/);
});
