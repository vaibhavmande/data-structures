import Stack from "./stack"

describe('Stack', () => {
  it('should load empty stack', () => {
    let stack = new Stack()
    expect(stack).not.toBeNull();
  })
})
