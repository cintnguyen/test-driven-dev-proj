class Stack {
    // use constructor to initialize with proper data
    constructor(){    
        this.top = -1
        this.items = {} // to represent stack itself as empty obj
    }

    get peek() {
        return this.items[this.top]
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value
    }

    pop() {
        const poppedValue = this.items[this.top]
        delete this.items[this.top]
        this.top -= 1;
        return poppedValue //technically I don't need this
    }
}

// test sutie, takes a call back function as a second argument
describe('My Stack', () => {
    
    // jest has helper functions for setup/ tear down
    let stack;
    beforeEach(() => {
        stack = new Stack()
    })

    it('is created empty', () => {

        expect(stack.top).toBe(-1)
        // expect(stack.items).toBe({}) // error because two different objects in memory
        expect(stack.items).toEqual({}) // better matcher, checks for value equality

    });

    it('can push to the top', () => {

        stack.push('🥑')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('🥑')

        stack.push('⭐️')
        expect(stack.top).toBe(1)
        expect(stack.peek).toBe('⭐️')
        
    });

    it('can pop off', () => {

        stack.push('🥑')
        stack.push('⭐️')
        expect(stack.top).toBe(1)
        expect(stack.peek).toBe('⭐️')

        stack.pop()
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('🥑')
    });

})