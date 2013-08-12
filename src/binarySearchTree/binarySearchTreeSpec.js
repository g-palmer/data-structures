describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });

  var fillTree = function(array) {
    array.forEach(function(value) {
      binarySearchTree.insert(value);
    });
  };

  it("should have methods named 'insert', 'contains', 'depthFirstLog' and 'breadthFirstLog'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  describe('insert', function() {

    it('should insert first to the tree\'s root', function() {
      binarySearchTree.insert(1);
      expect(binarySearchTree.getRoot().value).toEqual(1);
    });

    it('should insert to the root\'s left if value is lesser, to the right if value is greater', function() {
      binarySearchTree.insert(10);
      binarySearchTree.insert(5);
      binarySearchTree.insert(15);
      expect(binarySearchTree.getRoot().left.value).toEqual(5);
      expect(binarySearchTree.getRoot().right.value).toEqual(15);
    });

    it('shoud allow for batch inserts of values', function() {
      binarySearchTree.insert([10, 6, 5, 8, 4, 3, 2, 1, 0, 12, 15, 20]);
      expect(binarySearchTree.depthFirstLog().length).toEqual(12);
    });

    it('should auto-rebalance if max-depth is 2x min-depth', function() {
      fillTree([10, 6, 5, 8, 4, 3, 2, 1, 0, 12, 15, 20]);
      var minAndMax = binarySearchTree.getMinAndMaxDepth();
      expect(minAndMax[0] * 2).toBeLessThan(minAndMax[1] + 1);
    });


  });

  describe('contains', function() {

    it('should return true if given value is in tree', function() {
      binarySearchTree.insert(10);
      expect(binarySearchTree.contains(10)).toEqual(true);
    });

    it('should return false if given value is NOT in tree', function() {
      binarySearchTree.insert(10);
      expect(binarySearchTree.contains(12)).toEqual(false);
    });

    it('should search recursively through tree\'s nodes', function() {
      fillTree([10,5,7,15,0,20]);
      expect(binarySearchTree.contains(10)).toEqual(true);
      expect(binarySearchTree.contains(5)).toEqual(true);
      expect(binarySearchTree.contains(7)).toEqual(true);
      expect(binarySearchTree.contains(15)).toEqual(true);
      expect(binarySearchTree.contains(0)).toEqual(true);
      expect(binarySearchTree.contains(20)).toEqual(true);
    });
  });

  describe('depthFirstLog', function() {
    it('should return an array of each value in the tree in order', function() {
      fillTree([10,5,7,15,0,20]);
      expect(binarySearchTree.depthFirstLog()).toEqual([0, 5, 7, 10, 15, 20]);
    });
  });

  describe('breadthFirstLog', function() {
    it('should return array of each value in the tree in breadth first order', function() {
      fillTree([10,5,7,15,0,20]);
      expect(binarySearchTree.breadthFirstLog()).toEqual([10, 5, 15, 0, 7, 20]);
    });
  });

  describe('getMinAndMaxDepth', function() {
    it('should return an array of the min and max depths of the tree', function() {
      fillTree([10, 9, 8, 7, 6, 15, 20]);
      expect(binarySearchTree.getMinAndMaxDepth()).toEqual([3, 3]);
    });
  });

  describe('rebalance', function() {
    it ('should rebalance a tree so max and min depths are within 1', function() {
      fillTree([10, 6, 5, 8, 4, 3, 2, 1, 0, 12, 15, 20]);
      binarySearchTree.rebalance();
      var minAndMax = binarySearchTree.getMinAndMaxDepth();
      expect(minAndMax[1] - minAndMax[0]).toBeLessThan(2);
    });
  });

});
