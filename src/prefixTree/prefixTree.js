var PrefixTree = function(letter) {

  this.letter = letter || '';
  this.children = [];
  this.fullWord = false;

};

PrefixTree.prototype.insert = function(word) {

  var character = word[0];
  var charInChildren;
  var childNode;

  if (word) {

    this.children.forEach(function(node) {
      if (node.letter === character) {
        charInChildren = true;
        childNode = node;
      }
    });

    if (!charInChildren) {
      childNode = new PrefixTree(character);
      this.children.push(childNode);
    }

  }

  if (word.length > 1) { childNode.insert(word.slice(1)); }
  else { childNode.fullWord = true; }

};

PrefixTree.prototype.contains = function(word) {
  var character = word[0];
  var charInChildren;
  var childNode;

  if (word) {

    this.children.forEach(function(node) {
      if (node.letter === character) {
        charInChildren = true;
        childNode = node;
      }
    });

  }

  if (charInChildren) {
    if (word.length > 1) {
      return childNode.contains(word.slice(1));
    } else if (word.length === 1 && childNode.fullWord) {
      return true;
    }
  }

  return false;

};
