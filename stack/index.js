// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
// FILO

class Stack {
    constructor() {
        this.data = []
    }
    push(val) {
        return this.data.push(val)
    }
    pop(val) {
        return this.data.pop(val)
    }
    peek() {
        return this.data[this.data.length-1]
    }
}

module.exports = Stack;
