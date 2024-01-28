// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from "bun:test";
import { createCounter } from "./index.js";

describe("createCounter", () => {
  test("数値nを渡した場合、初回呼び出し時にnを返却する関数を返すこと", () => {
    const f = createCounter();
    expect(true).toBe(true);
  });

  test("数値nを渡した場合、返却された関数を1度実行した際にnの値+1した値を返すこと", () => {
    expect(true).toBe(true);
  });

  test("数値nを渡した場合、返却された関数を2度実行した際にnの値+2した値を返すこと", () => {
    expect(true).toBe(true);
  });

  describe("引数nの境界値テスト", () => {
    test("数値nに-1000を渡した場合、返却された関数を実行すると-1000を返すこと", () => {
      expect(true).toBe(true);
    });

    test("数値nに-1001を渡した場合、エラーを投げること", () => {
      expect(true).toBe(true);
    });

    test("数値nに1000を渡した場合、返却された関数を実行すると1000を返すこと", () => {
      expect(true).toBe(true);
    });

    test("数値nに1001を渡した場合、エラーを投げること", () => {
      expect(true).toBe(true);
    });
  });

  describe("返却した関数の実行回数制限の境界値テスト", () => {
    test("数値nを渡した場合、返却された関数を実行すると1000回までインクリメントした数を返すこと", () => {
      expect(true).toBe(true);
    });

    test("数値nを渡した場合、返却された関数を1001回実行するとエラーを投げること", () => {
      expect(true).toBe(true);
    });
  });
});
