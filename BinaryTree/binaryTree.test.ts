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
});
