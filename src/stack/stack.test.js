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

    stack.push('String Item')
    expect(stack.peek()).toBe('String Item')
  })

  it('should pop item', () => {
    let stack = new Stack()
    let item = stack.pop()

    expect(item).toBe(false)
    expect(stack.isEmpty()).toBe(true)
    expect(stack.getItemsCount()).toBe(0)

    stack.push(1)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(false)
  })

  it('should peek data from stack', () => {
    let stack = new Stack()
    expect(stack.peek()).toBe(false)

    stack.push(1)
    expect(stack.peek()).toBe(1)

    stack.push(2)
    expect(stack.peek()).toBe(2)

    stack.pop()
    stack.pop()

    expect(stack.peek()).toBe(false)
  })

  it('should check if stack is empty', () => {
    let stack = new Stack()
    expect(stack.isEmpty()).toBe(true)
  })
})
