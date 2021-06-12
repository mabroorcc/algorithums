export class Stack {
  public top = -1;
  private items: any[] = [];

  push(item: any) {
    this.top += 1;
    this.items = [...this.items, item];
    return true;
  }

  peek() {
    return this.getTopItem();
  }

  pop() {
    if (this.top === -1) return null;
    const popped = this.getTopItem();
    this.removeItemFromIdx(this.top);
    this.top -= 1;
    return popped;
  }

  private removeItemFromIdx(index: number) {
    this.items = this.items.filter((_, idx) => idx !== index);
  }

  private getTopItem() {
    if (this.top === -1) return null;
    return this.items[this.top];
  }
}
