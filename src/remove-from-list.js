const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(/*l, k*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let list = l;

  while(list){
    let current = list;
    if(current.value == k){
      list = list.next;
    }
    list = list.next;
  }
  return list;

  return JSON.stringify(l);


  let current = null;
  let prev = null;

  while(l){
    current = l.value;
    if(current !== k){
      prev = current;
      
      l = l.next;
    } else if (l.next != null){
      current = l.next.value;
    }
    l = l.next;
  }

  return l;

  return l.length;
  
  let head = l.value;
  // return head;

  return list;
  // return JSON.stringify(l)
  // function rec(l){
  //   for(elem in l){
  //     if(elem.value == k){
  //       elem.value = elem.next;
  //       rec(elem);
  //     }
  //   }
  // }
  // rec(l)

  // let list = l;

  // while(list){
  //   if(list.value == k){
  //     list.value = list.next.value;
  //   } else {
  //     list = list.next;
  //   }
  // }

  return l;
  for(elem in l){
    // return elem;
    if(elem.value == k && elem.next != null){
      elem.value = elem.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
