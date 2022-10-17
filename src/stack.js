const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor(value){
    this.value = value;
    this.current = null;
    this.next = null;
    this.prev = null;
    this.length = 0;
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.length == 0){
      this.current = element;
      this.length++;
    } else {
      this.prev = this.current
      this.current = element;
      this.length++;
    } 
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curr = this.current;
    this.current = this.prev;
    this.length--;
    return curr;
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.current;
  }
}

// const stack = new Stack();

module.exports = {
  Stack
};
