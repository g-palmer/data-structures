describe("PrefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'insert'", function() {
    expect(prefixTree.insert).toEqual(jasmine.any(Function));
  });

  describe('insert', function() {

    it('should correctly insert a given word', function() {
      prefixTree.insert('ball');
      prefixTree.insert('dog');
      expect(prefixTree.children[0].letter).toEqual('b');
      expect(prefixTree.children[1].letter).toEqual('d');
    });

    it('should correctly identify the end of a full word', function() {
      prefixTree.insert('be');
      expect(prefixTree.children[0].children[0].fullWord).toBe(true);
    });

    it('should not create new child nodes if prefix already exists', function() {
      prefixTree.insert('ball');
      prefixTree.insert('boy');
      expect(prefixTree.children.length).toEqual(1);
    });

  });

});
