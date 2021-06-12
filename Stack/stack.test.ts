import { Stack } from "./index";

describe("stack", () => {
  it("should be defined", () => {
    expect(Stack).toBeDefined();
  });

  it("should have a top", () => {
    const stack = new Stack();
    expect(stack.top).toBeDefined();
  });

  it("should be able to push", () => {
    const stack = new Stack();
    expect(stack.push(99)).toBeTruthy();
  });

  it("should be able to pop", () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);

    stack.push(55);
    expect(stack.pop()).toBe(55);

    stack.push(88);
    stack.push(23);
    stack.push(12);
    expect(stack.pop()).toBe(12);
    expect(stack.pop()).toBe(23);
    expect(stack.pop()).toBe(88);
  });

  it("should be able to peek", () => {
    const stack = new Stack();
    expect(stack.peek()).toBe(null);
  });
});
