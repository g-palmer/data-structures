var Set = function() {
  var _storage = {};
  var set = {
    add: function(value) {
      value = JSON.stringify(value);
      if (_storage[value]) {
        throw new Error('Already in the set');
      } else {
        _storage[value] = true;
      }
    },

    remove: function(value) {
      value = JSON.stringify(value);
      if (_storage[value]) {
        delete _storage[value];
      } else {
        throw new Error('Not in the set');
      }
    },

    contains: function(value) {
      value = JSON.stringify(value);
      return _storage[value] ? true : false;
    },

    length: function() {
      return Object.keys(_storage).length;
    }
  };
  return set;
};
