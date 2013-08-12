describe("PrefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'insert', 'contains'", function() {
    expect(prefixTree.insert).toEqual(jasmine.any(Function));
    expect(prefixTree.contains).toEqual(jasmine.any(Function));
  });

  describe('insert', function() {

    it('should correctly insert a given word', function() {
      prefixTree.insert('ball');
      prefixTree.insert('dog');
      expect(prefixTree.children['b']).toBeDefined();
      expect(prefixTree.children['d']).toBeDefined();
    });

    it('should correctly identify the end of a full word', function() {
      prefixTree.insert('be');
      expect(prefixTree.children['b'].children['e'].fullWord).toBe(true);
    });

    it('should not create new child nodes if prefix already exists', function() {
      prefixTree.insert('ball');
      prefixTree.insert('boy');
      prefixTree.insert('bay');
      expect(Object.keys(prefixTree.children).length).toEqual(1);
      expect(Object.keys(prefixTree.children['b'].children).length).toEqual(2);
    });

  });

  describe('contains', function() {

    it('should determine if a given string is part of the tree', function() {
      prefixTree.insert('ball');
      expect(prefixTree.contains('ball')).toBe(true);
      expect(prefixTree.contains('boy')).toBe(false);
    });

  });

});
