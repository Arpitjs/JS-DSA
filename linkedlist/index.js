// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }

}
class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
        return this.head
    }
    size() {
        let counter = 0
        let node = this.head
        while (node) {
            counter++
            node = node.next
        }
        return counter
    }
    getFirst() {
        return this.head
    }
    getLast() {
        if (!this.head) {
            return null
        }
        let node = this.head
        while (node) {
            if (node.next === null) {
                return node
            }
           node = node.next
        }
    }
    clear() {
        this.head = null
    }
    removeFirst() {
        if (!this.head) return
        this.head = this.head.next
    }
    removeLast() {
        if (!this.head) return
        if (!this.head.next) {
            this.head = null
            return
        }
        let previous = this.head
        let node = this.head.next
        while (node.next) {
            previous = node
            node = node.next
        }
        previous.next = null
    }
    insertLast(data) {
        let currentLastNode = this.getLast()
       if(currentLastNode) {
           currentLastNode.next = new Node(data)
       } else {
           this.head = new Node(data)
       }
    }
    getAt(index) {
        let counter = 0
        let node = this.head
        while(node) {
            if(counter === index) {
                return node
            }
            counter ++
            node = node.next
        }
        return null
      }
  
    removeAt(index) {
      if(!this.head) return
      if(index === 0) {
          this.head = this.head.next
          return
      }
      //for out of order indexes
      let previous = this.getAt(index - 1)
      if(!previous || !previous.next) {
        return 
      } 
      previous.next = previous.next.next
    }
    insertAt(data, index) {
        //if linked list has nothing
        if(!this.head) {
            this.head = new Node(data)
            return
        }
        // if we wanna add in the front (same as insertFirst)
        if(index === 0) {
            this.head = new Node(data, this.head)
            return
        }
        // If index is out of bounds, add the node to the end of the list
        let previous = this.getAt(index - 1) || this.getLast()
        let newNode = new Node(data, previous.next)
        previous.next = newNode
    }
    forEach(fun) {
        let node = this.head
        while(node) {
            fun(node)
            node = node.next
        }
    }
} 
// let node0 = new Node(100)
// let linkedList1 = new LinkedList()
// linkedList1.head = node0
// console.log(linkedList1.insertFirst(10))
// console.log(linkedList1.size())
// console.log(linkedList1.getFirst())
// console.log('LAST NODE', linkedList1.getLast())
// console.log('REMOVE FIRST', linkedList1.removeFirst())
// console.log('INSERT LAST', linkedList1.insertLast(88))
// console.log('INSERT AT', linkedList1.insertAt(1, 20))
// console.log(linkedList1)
module.exports = { Node, LinkedList }