import { describe, expect, test } from "bun:test";
import { ListNode, removeNthFromEnd, convertArrayToListNode, convertListNodeToArray } from "./index.js";

describe("convertArrayToListNode", () => {
  test("[1]が渡された場合、ListNode[1]を返す", () => {
    const result = convertArrayToListNode([1]);

    expect(result).toStrictEqual(
        new ListNode(1),
    );
  });
  test("[1,2]が渡された場合、ListNode[1,2]を返す", () => {
    const result = convertArrayToListNode([1, 2]);

    expect(result).toStrictEqual(
        new ListNode(1, new ListNode(2, null)),
    );
  });
});

describe("convertListNodeToArray", () => {
  test("ListNode[1]が渡された場合、[1]を返す", () => {
    const node = convertArrayToListNode([1]);
    const result = convertListNodeToArray(node);

    expect(result).toStrictEqual(
        [1]
    );
  });
  test("ListNode[1,2]が渡された場合、[1,2]を返す", () => {
    const node = convertArrayToListNode([1, 2]);
    const result = convertListNodeToArray(node);

    expect(result).toStrictEqual(
        [1, 2]
    );
  });
});

describe("removeNthFromEnd", () => {
  test("Head[1,2,3]と番号1が渡された場合、Head[1,2]を返す", () => {
    const head = convertArrayToListNode([1, 2, 3]);

    const result = removeNthFromEnd(head, 1);

    expect(result).toStrictEqual(
        convertArrayToListNode([1, 2]),
    );
  });
  test("Head[1,2,3]と番号2が渡された場合、Head[1,3]を返す", () => {
    const head = convertArrayToListNode([1, 2, 3]);

    const result = removeNthFromEnd(head, 2);

    expect(result).toStrictEqual(
        convertArrayToListNode([1, 3]),
    );
  });
  test("Head[1]と番号1が渡された場合、nullを返す", () => {
    const head = convertArrayToListNode([1]);

    const result = removeNthFromEnd(head, 1);

    expect(result).toStrictEqual(
        null,
    );
  })
  test("Head[1,0,1]と番号3が渡された場合、Head[0,1]を返す", () => {
    const head = convertArrayToListNode([1,0,1]);

    const result = removeNthFromEnd(head, 3);

    expect(result).toStrictEqual(
        convertArrayToListNode([0,1])
    );
  })
});
