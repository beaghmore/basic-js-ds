const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // getUnderlyingList() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }
  getUnderlyingList() {
    return this.first;
  }




  isEmpty() {
    return !this.size
  }
  
  enqueue(item) {
    const newNode = new ListNode(item);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    

  }

  // dequeue() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  dequeue() {
    if (this.isEmpty()) return null;
    const itemToRemove = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;

    return itemToRemove.value;

  }
}

module.exports = {
  Queue
};
