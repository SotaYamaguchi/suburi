---
to: apps/<%= h.inflection.dasherize(name) %>/src/index.test.ts
---
// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from "bun:test";
import { createCounter } from "./index.js";

describe("createCounter", () => {
  test.each([
    [10, 1, 10],
    [10, 2, 11],
    [10, 3, 12],
  ])(
    "数値%iを引数に渡した場合、%i回関数を実行すると%iを返すこと",
    (number, executionCount, expected) => {
      const f = createCounter(number);
      const counts = Array.from({ "length": executionCount }, () => {
        return f();
      });
      expect(counts[counts.length - 1]).toBe(expected);
    },
  );

  describe("引数nの境界値テスト", () => {
    test(
      "数値nに-1000を渡した場合、返却された関数を実行すると-1000を返すこと",
      () => {
        const f = createCounter(-1000);
        expect(f()).toBe(-1000);
      },
    );

    test("数値nに-1001を渡した場合、エラーを投げること", () => {
      expect(() => createCounter(-1001)).toThrow();
    });

    test(
      "数値nに1000を渡した場合、返却された関数を実行すると1000を返すこと",
      () => {
        const f = createCounter(1000);
        expect(f()).toBe(1000);
      },
    );

    test("数値nに1001を渡した場合、エラーを投げること", () => {
      expect(() => createCounter(1001)).toThrow();
    });
  });

  describe("返却した関数の実行回数制限の境界値テスト", () => {
    test(
      "数値nを渡した場合、返却された関数を1001回実行するとエラーを投げること",
      () => {
        const f = createCounter(10);
        const counts = Array.from({ "length": 1000 }, () => {
          return f();
        });
        expect(counts[counts.length - 1]).toBe(1009);
        expect(() => f()).toThrow();
      },
    );
  });
});
