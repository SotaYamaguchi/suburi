// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from "bun:test";
import { createHelloWorld } from "./index.js";

describe("createHelloWorld", () => {
  test("Hello Worldを返す関数を返すこと", () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
  });

  test("任意の引数が渡ってきた場合でも、Hello Worldを返すこと", () => {
    const args = [{}, null, 42];
    const f = createHelloWorld();
    expect(f(args)).toBe("Hello World");
  });

  test("引数ˆが0個の場合、Hello Worldを返すこと", () => {
    const args = [];
    const f = createHelloWorld();
    expect(args.length).toBe(0);
    expect(f(args)).toBe("Hello World");
  });

  test("引数が10個の場合、Hello Worldを返すこと", () => {
    const args = Array.from({ "length": 10 }, (_, index) => index);
    const f = createHelloWorld();
    expect(args.length).toBe(10);
    expect(f(...args)).toBe("Hello World");
  });

  test("引数が11個の場合、エラーを投げること", () => {
    const args = Array.from({ "length": 11 }, (_, index) => index);
    const f = createHelloWorld();
    expect(args.length).toBe(11);
    expect(() => f(...args)).toThrow();
  });
});
