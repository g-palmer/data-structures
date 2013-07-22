var Stack = function() {
  var _storage = [];
  var stack = {
    push: function(value) {
      return _storage.push(value);
    },
    pop: function() {
      return _storage.length ? _storage.pop() : alert('Stack is empty');
    },
    length: function() {
      return _storage.length;
    }
  };
  return stack;
};
