import { Stack } from "./index";

describe("stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should be defined", () => {
    expect(Stack).toBeDefined();
  });

  it("should have a top", () => {
    expect(stack.top).toBeDefined();
  });

  it("should be able to push", () => {
    expect(stack.push(99)).toBeTruthy();
  });

  it("when popped before insertion it should return null", () => {
    expect(stack.pop()).toBe(null);
  });

  it("should be able to pop", () => {
    stack.push(55);
    expect(stack.pop()).toBe(55);
    stack.push(12);
    expect(stack.pop()).toBe(12);
  });

  it("should be able to peek", () => {
    expect(stack.peek()).toBe(null);
  });
});
