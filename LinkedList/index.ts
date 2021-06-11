export class Node {
  constructor(public data: any, public next: Node | null) {}
}
export class LinkedList {
  public Head: Node | null = null;

  createNode(data: any) {
    const lastNode = this.getLastNode();
    const node = new Node(data, null);
    if (lastNode === null) {
      this.Head = node;
    } else {
      lastNode.next = node;
    }
    return node;
  }

  loopOverNodes(fn: (node: Node | null) => void) {
    let currNode: Node | null = this.Head;
    if (currNode === null) return fn(null);
    if (currNode.next === null) return fn(currNode);
    do {
      fn(currNode);
      currNode = currNode.next;
    } while (currNode);
  }

  getLastNode(): Node | null {
    let last: null | Node = null;
    this.loopOverNodes((node) => {
      if (!node) return;
      if (node.next === null) {
        last = node;
      }
    });
    return last;
  }
}
