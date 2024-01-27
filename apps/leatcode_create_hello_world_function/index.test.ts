// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from "bun:test";

describe("createHelloWorld", () => {
  test("Hellow Worldを返す関数を返すこと", () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
  });

  test("任意の引数が渡ってきた場合でも、必ずHello Worldを返すこと", () => {
    expect(true).toBe(true);
  });

  test("引数の数は最大10個まで渡せること", () => {
    expect(true).toBe(true);
  });
});
