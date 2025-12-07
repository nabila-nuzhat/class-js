function createCounter() {
  var count = 0;
  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

var counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Accesses the count variable via closures