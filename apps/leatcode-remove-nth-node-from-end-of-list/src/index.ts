/* eslint-disable no-console */
export class ListNode {
    readonly val: number;
    readonly next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export const convertArrayToListNode = (numList: number[]): ListNode => {
    const currentVal = numList.shift();
    const nextVal = numList[0];
    if (nextVal === undefined) {
        return new ListNode(currentVal, null);
    }

    return new ListNode(currentVal, convertArrayToListNode(numList));
}

export const convertListNodeToArray = (node: ListNode, numList: number[] = []): number[] => {
    numList.push(node.val);
    if (!node.next) {
        return numList
    }
    
    return convertListNodeToArray(node.next, numList);
}

export const removeNthFromEnd = (
    head: ListNode | null,
    n: number,
): ListNode | null => {
    if (!head) {
        throw new Error("head is not defined");
    }

    const numList = convertListNodeToArray(head);
    numList.splice(-n, 1);
    if (numList.length === 0) {
        return null;
    }

    return convertArrayToListNode(numList);
};
