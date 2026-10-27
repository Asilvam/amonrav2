import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { URL, URLSearchParams } from "node:url";
import { runInNewContext } from "node:vm";
import test from "node:test";
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

function apiFor(body) {
  const file = new URL("../src/components/velas/api.ts", import.meta.url);
  const source = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const module = { exports: {} };
  const requests = [];
  const nativeRequire = createRequire(file);
  const require = (name) => {
    if (name === "./candle-room") return candleRoom;
    if (name === "../peticiones/api")
      return {
        getApiBase: () => "https://mock.invalid",
        extractApiErrorMessage: () => "",
      };
    return nativeRequire(name);
  };
  const fetch = async (url, init) => {
    requests.push({ url, init });
    return { ok: true, json: async () => body };
  };
  runInNewContext(`(function(require,module,exports){${source}\n})`, {
    fetch,
    URLSearchParams,
  })(require, module, module.exports);
  return { api: module.exports, requests };
}

const candle = {
  id: "test-candle",
  intention: "Calma",
  dedication: "",
  name: "",
  color: "azul",
  startedAt: "2026-10-24T18:05:00.000Z",
  publishLocation: false,
};

test("the room requests the chosen status and twenty-item page with cancellation support", async () => {
  const { api, requests } = apiFor({
    candles: [candle],
    pagination: { total: 21, skip: 20, limit: 20, hasMore: false },
  });
  const controller = new globalThis.AbortController();
  const page = await api.getRoomCandles("extinguished", 20, controller.signal);
  const url = new URL(requests[0].url);
  assert.equal(url.pathname, "/api/velas");
  assert.equal(url.searchParams.get("status"), "extinguished");
  assert.equal(url.searchParams.get("limit"), "20");
  assert.equal(url.searchParams.get("skip"), "20");
  assert.equal(requests[0].init.signal, controller.signal);
  assert.equal(page.candles[0].color, "azul");
  assert.equal(page.candles[0].startedAt, Date.parse(candle.startedAt));
  assert.equal(page.pagination.total, 21);
});

test("invalid or missing page metadata cannot silently hide candles", async () => {
  for (const body of [
    { candles: [] },
    {
      candles: [],
      pagination: { total: "20", skip: 0, limit: 20, hasMore: false },
    },
    {
      candles: [],
      pagination: { total: 20, skip: 0, limit: 19, hasMore: false },
    },
    {
      candles: [],
      pagination: { total: 20, skip: 20, limit: 20, hasMore: false },
    },
    {
      candles: [],
      pagination: { total: 20, skip: 0, limit: 20, hasMore: "yes" },
    },
    {
      candles: Array.from({ length: 21 }, () => candle),
      pagination: { total: 21, skip: 0, limit: 20, hasMore: false },
    },
  ]) {
    await assert.rejects(
      apiFor(body).api.getRoomCandles("active"),
      /paginación inválida/,
    );
  }
});

test("the first request starts at zero and accepts an empty group", async () => {
  const { api, requests } = apiFor({
    candles: [],
    pagination: { total: 0, skip: 0, limit: 20, hasMore: false },
  });
  const page = await api.getRoomCandles("active");
  assert.equal(new URL(requests[0].url).searchParams.get("skip"), "0");
  assert.equal(page.candles.length, 0);
  assert.equal(page.pagination.total, 0);
});
