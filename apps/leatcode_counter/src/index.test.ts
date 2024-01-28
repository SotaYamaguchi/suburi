// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from "bun:test";
import { createHelloWorld } from "./index.js";

describe("createCounter", () => {
  test("Hello Worldを返す関数を返すこと", () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
  });
});
