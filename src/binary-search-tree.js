const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null; // корень bst
  }
  
  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
    } else {
      let current = this._root;
      while (true) {
        if (data > current.data) {
          if (current.right === null) {
            current.right = new Node(data);
            break;
          } else {
            current = current.right;
          }
        } else if (data < current.data) {
          if (current.left === null) {
            current.left = new Node(data);
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }
  

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    function traverse(node) {
      if (node === null || node.data === data) {
        return node;
      } else if (data < node.data) {
        return traverse(node.left);
      } else {
        return traverse(node.right);
      }
    }
    return traverse(this._root);
  }
  

  remove(data, node = this._root) {
    if (!node) {
      return null;
    }
    
    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.data = this.min(node.right);
        node.right = this.remove(node.data, node.right);
      }
    }
    return node;
  }


  min(node = this._root) {
    let current = node;
    while(current.left != null) {
      current = current.left;
    }
    return current.data;
  }



  max(node = this._root) {
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};