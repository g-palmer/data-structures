class Stack

  def initialize
    @storage = []
    @min_storage = []
  end

  def push(value)
    if @min_storage.empty? or value <= @min_storage.last then
      @min_storage.push(value)
    end
    @storage.push(value)    
  end

  def pop
    if @storage.last === @min_storage.last
      @min_storage.pop
    end
    return @storage.pop
  end

  def length
    return @storage.length
  end

  def minValue
    return @min_storage.last
  end

end