export default class Stack {
  constructor() {
    this.arrayItems = []
  }

  push(item) {
    return this.arrayItems.unshift(item)
  }

  pop() {
    return !this.isEmpty() ? this.arrayItems.shift() : false
  }

  peek() {
    return this.arrayItems[0]
  }

  isEmpty() {
    return !this.arrayItems.length
  }

  getItemsCount() {
    return this.arrayItems.length
  }
}
