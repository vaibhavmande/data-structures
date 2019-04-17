import Stack from "./stack"

describe('Stack', () => {
  it('should load empty stack', () => {
    let stack = new Stack()
    expect(stack).not.toBeNull();
  })

  it('should push item', () => {
    let stack = new Stack()
    stack.push(1)
    expect(stack.peek()).toBe(1)
    expect(stack.isEmpty()).toBe(false)
    stack.push(2)
    stack.push(3)
    expect(stack.peek()).toBe(3)
  })

  it('should pop item', () => {

  })
  
  it('should peek data from stack', () => {

  })

  it('should check if stack empty', () => {

  })
})
