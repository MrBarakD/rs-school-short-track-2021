const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    if (!this.head) {
      this.head = new ListNode(element);
      // return this.head;
      return;
    }
    let end = this.head;
    while (end.next !== null) {
      end = end.next;
    }
    const node = new ListNode(element);
    end.next = node;
    // return this.head;
  }

  dequeue() {
    if (!this.head) {
      return 'empty list';
    }
    const out = this.head.value;
    this.head = this.head.next;
    return out;
  }
}

module.exports = Queue;
