import { BinaryTree } from "./BinaryTree";

const bt = new BinaryTree();

bt.insert(234);
bt.insert(94);
bt.insert(4);
bt.insert(2);
bt.insert(200);
bt.insert(24);

bt.traverseWholeTree((node) => console.log(node.data));
