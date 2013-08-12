var T9PrefixTree = function(letter) {

  PrefixTree.call(this, letter);

};

T9PrefixTree.prototype = Object.create(PrefixTree.prototype);

T9PrefixTree.prototype.constructor = T9PrefixTree;

T9PrefixTree.prototype.t9Characters = {
  1: [''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

T9PrefixTree.prototype.t9Search = function(number) {

  var numbers = String.prototype.split.call(number, '');
  var string = '';
  var counter = 0;

  numbers.forEach(function(num, index) {
    if (num !== '-') {
      if (num === numbers[index + 1]) {
        counter++;
      } else {
        string += this.t9Characters[num][counter];
        counter = 0;
      }
    }
  }, this);

  return this.search(string);

};
