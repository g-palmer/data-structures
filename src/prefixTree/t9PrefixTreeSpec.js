describe("T9PrefixTree", function() {
  var t9PrefixTree;

  beforeEach(function() {
    t9PrefixTree = new T9PrefixTree();
  });

  it("should have methods named 'insert', 'contains', 'search', 't9Search'", function() {
    expect(t9PrefixTree.insert).toEqual(jasmine.any(Function));
    expect(t9PrefixTree.contains).toEqual(jasmine.any(Function));
    expect(t9PrefixTree.search).toEqual(jasmine.any(Function));
    expect(t9PrefixTree.t9Search).toEqual(jasmine.any(Function));
  });

  describe('insert, contains, and search', function() {
    it('should extend from PrefixTree\'s insert, contains and search methods', function() {
      expect(t9PrefixTree.insert).toEqual(PrefixTree.prototype.insert);
      expect(t9PrefixTree.contains).toEqual(PrefixTree.prototype.contains);
      expect(t9PrefixTree.search).toEqual(PrefixTree.prototype.search);
    });
  });

  describe('t9Search', function() {
    it('should return all possible words based on t9 text functionality', function() {
      t9PrefixTree.insert('ball');
      t9PrefixTree.insert('bat');
      t9PrefixTree.insert('cat');
      t9PrefixTree.insert('crow');
      t9PrefixTree.insert('drum');
      t9PrefixTree.insert('apple');
      var t9Search2 = t9PrefixTree.t9Search(2);
      expect(t9Search2).toContain('apple');
      var t9Search22 = t9PrefixTree.t9Search(22);
      expect(t9Search22).toContain('ball');
      expect(t9Search22).toContain('bat');
      var t9Search222 = t9PrefixTree.t9Search(222);
      expect(t9Search222).toContain('cat');
      expect(t9Search222).toContain('crow');
      var t9Search27 = t9PrefixTree.t9Search(27);
      expect(t9Search27).toContain('apple');
      var t9Search3777 = t9PrefixTree.t9Search(3777);
      expect(t9Search3777).toContain('drum');
    });
  });

});
