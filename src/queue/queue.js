var Queue = function() {
  var _storage = [];
  var queue = {

    enqueue: function(value) {
      _storage.unshift(value);
    },

    dequeue: function() {
      return _storage.shift();
    },

    length: function() {
      return _storage.length;
    }

  };
  return queue;
};