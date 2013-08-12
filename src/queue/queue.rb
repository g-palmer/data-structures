class Queue
  def initialize
    @storage = [];
  end

  def enqueue(value)
    @storage.unshift(value)
  end

  def dequeue
    return @storage.shift()
  end

  def length
    return @storage.length
  end
end