import { LinkedList } from "./index";

describe("LinkedList", () => {
  let linkedList: LinkedList;
  beforeAll(() => {
    linkedList = new LinkedList();
  });

  it("should exist", () => {
    expect(LinkedList).toBeDefined();
  });

  it("should have a head", () => {
    expect(linkedList.Head).toBeDefined();
    expect(linkedList.Head).toBeNull();
  });

  it("should be able to create node", () => {
    const result = linkedList.createNode(55);
    expect(result).toMatchObject({ data: 55, next: null });
  });

  it("should be able to loop over", () => {
    const firstCb = jest.fn((node) => node);

    linkedList.loopOverNodes(firstCb);
    expect(firstCb.mock.calls.length).toBe(1);

    linkedList.createNode(89);
    linkedList.createNode(88);

    const secondCb = jest.fn((node) => node);
    linkedList.loopOverNodes(secondCb);
    expect(secondCb.mock.calls.length).toBe(3);
  });
});
