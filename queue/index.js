// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.q = []
    }

    add(val) {
        this.q.unshift(val)
        return this
    }
    remove() {
        return this.q.pop()
    }
}

let queue1 = new Queue()
queue1.add(1).remove()
console.log(queue1)

module.exports = Queue
