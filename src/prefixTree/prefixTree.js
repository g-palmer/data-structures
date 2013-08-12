var PrefixTree = function(letter) {

  this.letter = letter || '';
  this.children = {};
  this.fullWord = false;

};

PrefixTree.prototype.insert = function(word) {

  var character = word[0];
  var charInChildren = this.children[character];
  var childNode = charInChildren ? charInChildren : new PrefixTree(character);

  if (word.length > 1) { childNode.insert(word.slice(1)); }
  else { childNode.fullWord = true; }

  if (!charInChildren) {
    this.children[character] = childNode;
  }

};

PrefixTree.prototype.contains = function(word) {

  var character = word[0];
  var childNodeInChildren = this.children[character];

  if (childNodeInChildren) {
    if (word.length > 1) {
      return childNodeInChildren.contains(word.slice(1));
    } else if (word.length === 1 && childNodeInChildren.fullWord) {
      return true;
    }
  }

  return false;

};

PrefixTree.prototype.search = function(prefix, word, results) {

  word = word || prefix;

  if (prefix) {

    var character = prefix[0];
    var childNodeInChildren = this.children[character];

    if (childNodeInChildren) {
      return childNodeInChildren.search(prefix.slice(1), word);
    }

  } else {

    results = results || [];

    if (this.fullWord) { results.push(word); }

    for (var letter in this.children) {
      var pre = word + letter;
      results.concat(this.children[letter].search('', pre, results));
    }

    return results;

  }


};
