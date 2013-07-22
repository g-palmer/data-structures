var Stack = function() {
  var _storage = [];
  var _minStorage = [];
  var stack = {

    push: function(value) {
      if (!_minStorage.length || value <= _minStorage[_minStorage.length-1]) {
        _minStorage.push(value);
      }
      return _storage.push(value);
    },

    pop: function() {
      if (_storage[_storage.length - 1] === _minStorage[_minStorage.length - 1]) {
        _minStorage.pop();
      }
      return _storage.length ? _storage.pop() : alert('Stack is empty');
    },

    length: function() {
      return _storage.length;
    },

    getMinValue: function() {
      return _minStorage.length ? _minStorage[_minStorage.length-1] : alert('Stack is empty');
    }

  };
  return stack;
};
