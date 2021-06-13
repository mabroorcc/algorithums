class Node {
  constructor(
    public data: any,
    public left: Node | null,
    public right: Node | null
  ) {}
}

export class BinaryTree {
  private head: Node | null = null;

  insert(data: number) {
    return true;
  }
}
