describe("PrefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'insert', 'contains', 'search", function() {
    expect(prefixTree.insert).toEqual(jasmine.any(Function));
    expect(prefixTree.contains).toEqual(jasmine.any(Function));
    expect(prefixTree.search).toEqual(jasmine.any(Function));
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

  describe('search', function() {

    it('should return all possibilites of a given prefix', function() {
      prefixTree.insert('ball');
      prefixTree.insert('boy');
      prefixTree.insert('box');
      prefixTree.insert('basketball');
      var bPossibilites = prefixTree.search('b');
      expect(bPossibilites).toContain('ball');
      expect(bPossibilites).toContain('boy');
      expect(bPossibilites).toContain('box');
      expect(bPossibilites).toContain('basketball');
      var baPossibilities = prefixTree.search('ba');
      expect(baPossibilities).toContain('ball');
      expect(baPossibilities).toContain('basketball');
      var boPossibilities = prefixTree.search('bo');
      expect(boPossibilities).toContain('boy');
      expect(boPossibilities).toContain('box');
    });

  });

});
