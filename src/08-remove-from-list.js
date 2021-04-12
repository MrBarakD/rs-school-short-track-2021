const ListNode = require('../extensions/list-node');
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let cloneNode = new ListNode(l.value);
  let end = l.next;
  while (end) {
    let nexty = cloneNode;
    while (nexty.next !== null) {
      nexty = nexty.next;
    }
    const node = new ListNode(end.value);
    nexty.next = node;
    end = end.next;
  }
  if (cloneNode.value === k) {
    cloneNode = cloneNode.next;
  }
  let list1 = cloneNode;
  let list2;
  let list3;
  while (list1.value !== k) {
    list2 = list1;
    list1 = list1.next;
    list3 = list1.next;
  }
  list2.next = list3;
  return cloneNode;
}

module.exports = removeKFromList;
