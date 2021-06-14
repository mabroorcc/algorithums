class Node {
  constructor(
    public data: any,
    public left: Node | null,
    public right: Node | null
  ) {}
}

export class BinaryTree {
  private head: Node | null = null;

  private balancedInsertion(node: Node, data: number): Node {
    // check if left has a value
    if (node.left === null) {
      const n = new Node(data, null, null);
      node.left = n;
      return n;
    }

    // check if right has a value
    if (node.right === null) {
      const n = new Node(data, null, null);
      node.right = n;
      return n;
    }

    // randomly inserting
    const dir = Math.floor(Math.random() * 2) ? "left" : "right";
    if (dir === "left") {
      return this.balancedInsertion(node.left, data);
    } else {
      return this.balancedInsertion(node.right, data);
    }
  }

  private traverse(
    cb: (node: Node, level: number) => void,
    node: Node,
    level: number
  ) {
    cb(node, level);
    if (node.left) {
      this.traverse(cb, node.left, level + 1);
    }
    if (node.right) {
      this.traverse(cb, node.right, level + 1);
    }
  }

  public traverseWholeTree(cb: (node: Node, level: number) => void) {
    if (this.head === null) return;
    this.traverse(cb, this.head, 0);
  }

  insert(data: number) {
    if (this.head === null) {
      const n = new Node(data, null, null);
      this.head = n;
      return n;
    }

    // head is already occupied so perform insertion in childs
    return this.balancedInsertion(this.head, data);
  }
}
