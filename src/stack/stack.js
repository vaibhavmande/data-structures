export default class Stack {
  constructor() {
    this.arrayItems = []
  }

  push(item) {
    this.arrayItems.unshift(item)
  }

  peek() {
    return this.arrayItems[0]
  }

  isEmpty() {
    return !this.arrayItems.length
  }
}
