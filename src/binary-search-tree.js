const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootTree = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootTree;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootTree = addData(this.rootTree, data);

    function addData(node, data){
      if(!node) {
        return new Node(data);
      }
      if(node.data === data){
        return data;
      }
      if(data < node.data){
        node.left = addData(node.left, data);
      } else {
        node.rigth = addData(node.rigth, data);
      }
      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchData(this.rootTree, data);

    function searchData(node, data){
      if(!node) {
        return false;
      }
      if(data === node.data){
        return true;
      }
      if(data < node.data){
        return searchData(node.left, data);
      } else {
        return searchData(node.rigth, data);
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findData(this.rootTree, data);

    function findData(node, data){
      if(!node) {
        return null;
      }
      if(data === node.data){
        return node;
      }
      if(data < node.data){
        return findData(node.left, data);
      } else {
        return findData(node.rigth, data);
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // this.root = removeNode(node, data);
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data){
      if(!node){
        return null;
      }
      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data){
        node.rigth = removeNode(node.rigth, data);
        return data;
      } else {
        if(!node.left && !node.rigth){
          return null;
        }
        if(!node.left){
          node = node.rigth;
          return node;
        }
        if(!node.rigth){
          node = node.left;
          return node;
        }
        
        let minRigth = node.rigth;
        while(minRigth.left){
          minRigth = minRigth.left;
        }
        node.data = minRigth.data;
        node.rigth = removeNode(node.rigth, minRigth, data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.rootTree){
      return null;
    }
    
    let node = this.rootTree;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.rootTree){
      return null;
    }
    if(!this.rootTree.rigth){
      return this.rootTree.data;
    }

    let node = this.rigth;
    while(node.rigth){
      node = node.rigth;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};