import { BinaryTree } from "./index";

describe("binaryTree", () => {
  let btree: BinaryTree;

  beforeEach(() => {
    btree = new BinaryTree();
  });

  it("must be defined", () => {
    expect(BinaryTree).toBeDefined();
  });

  it("must be able to insert", () => {
    expect(btree.insert(4)).toBeTruthy();
  });

  it("must traverse the tree", () => {
    const fn = jest.fn();
    btree.insert(5);
    btree.insert(9);
    btree.insert(22);
    btree.traverseWholeTree(fn);
    expect(fn).toBeCalledTimes(3);
  });
});
