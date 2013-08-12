describe("T9PrefixTree", function() {
  var t9PrefixTree;

  beforeEach(function() {
    t9PrefixTree = new T9PrefixTree();
  });

  it("should have methods named 'insert', 'contains', 'search", function() {
    expect(t9PrefixTree.insert).toEqual(jasmine.any(Function));
    expect(t9PrefixTree.contains).toEqual(jasmine.any(Function));
    expect(t9PrefixTree.search).toEqual(jasmine.any(Function));
    expect(t9PrefixTree.t9Search).toEqual(jasmine.any(Function));
  });

  describe('insert', function() {

  });

  describe('contains', function() {

  });

  describe('search', function() {

  });

  describe('t9Search', function() {

  });

});
