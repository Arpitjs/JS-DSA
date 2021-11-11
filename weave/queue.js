// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
    return this
  }

  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length -1]
  }
}

let queue = new Queue()
console.log(queue)

module.exports = Queue
