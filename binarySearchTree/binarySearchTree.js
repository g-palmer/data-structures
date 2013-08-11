var BinarySearchTree = function(){

  this._root = null;
  this._minDepth = -1;
  this._maxDepth = -1;

};

BinarySearchTree.prototype.insert = function(value) {

  var newNode = this.makeNode(value);

  if (this._root) {

    newNode.depth++;

    (function insert(node) {
      newNode.depth++;
      if (value < node.value) {
        if (node.left) {
          insert(node.left);
        } else {
          node.left = newNode;
        }
      } else if (value > node.value) {
        if (node.right) {
          insert(node.right);
        } else {
          node.right = newNode;
        }
      } else {
        alert('value already in tree');
      }

    }(this._root));

  } else {
    newNode.depth++;
    this._root = newNode;
  }

  return newNode;

};

BinarySearchTree.prototype.contains = function(value, node) {

  node = node || this._root;

  if (node.left && value < node.value) {
    return this.contains(value, node.left);
  } else if (node.right && value > node.value) {
    return this.contains(value, node.right);
  } else if (value === node.value) {
    return true;
  }

  return false;

};

BinarySearchTree.prototype.depthFirstLog = function() {

  var treeValues = [];

  (function traverse(node) {

    if (node.left) {
      traverse(node.left);
    }
    treeValues.push(node.value);
    if (node.right) {
      traverse(node.right);
    }

  }(this._root));

  return treeValues;

};

BinarySearchTree.prototype.breadthFirstLog = function() {

  var treeValues = [];
  var treeNodeQ = [this._root];
  var node;

  while (treeNodeQ.length) {
    node = treeNodeQ.shift();
    treeValues.push(node.value);
    if (node.left) treeNodeQ.push(node.left);
    if (node.right) treeNodeQ.push(node.right);
  }

  return treeValues;

};

BinarySearchTree.prototype.getMinAndMaxDepth = function() {

  var leafValues = [];
  var treeNodeQ = [this._root];
  var node;

  while (treeNodeQ.length) {
    node = treeNodeQ.shift();
    if (!node.left && !node.right) leafValues.push(node.depth);
    if (node.left) treeNodeQ.push(node.left);
    if (node.right)treeNodeQ.push(node.right);
  }

  leafValues.sort(function(a, b) {
    return a > b ? 1 : -1;
  });

  this._minDepth = leafValues[0];
  this._maxDepth = leafValues.pop();

  return [this._minDepth, this._maxDepth];

};

BinarySearchTree.prototype.rebalance = function() {

  var sortedTreeValues = this.breadthFirstLog().sort(function(a, b) {
    return a > b ? 1 : -1;
  });

  this._root = null;
  var tree = this;

  (function insert(array) {
    var mid = array.length >>> 1;
    tree.insert(array[mid]);
    if (array.slice(0, mid).length) insert(array.slice(0, mid));
    if (array.slice(mid + 1).length) insert(array.slice(mid + 1));
  }(sortedTreeValues));

};

BinarySearchTree.prototype.makeNode = function(value) {

  return {
    value: value,
    left: null,
    right: null,
    depth: 0
  };

};

BinarySearchTree.prototype.getRoot = function() {
  return this._root;
};
