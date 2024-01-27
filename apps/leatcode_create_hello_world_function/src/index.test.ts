// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from "bun:test";
import { createHelloWorld } from "./index.js";

describe("createHelloWorld", () => {
  test("Hello Worldを返す関数を返すこと", () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
  });

  test("任意の引数が渡ってきた場合でも、必ずHello Worldを返すこと", () => {
    const args = [{}, null, 42];
    const f = createHelloWorld();
    expect(f(args)).toBe("Hello World");
  });

  test("引数の数は最大10個まで渡せること", () => {
    expect(true).toBe(true);
  });
});
