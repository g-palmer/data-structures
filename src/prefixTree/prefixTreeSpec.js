describe("PrefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'insert'", function() {
    expect(prefixTree.insert).toEqual(jasmine.any(Function));
  });

  describe('insert', function() {

    it('should correctly insert a given word string', function() {
      prefixTree.insert('ball');
      expect(prefixTree.children[0].letter).toEqual('b');
    });

    it('should correctly identify the end of a full word', function() {
      prefixTree.insert('be');
      expect(prefixTree.children[0].children[0].fullWord).toBe(true);
    });

  });

});
