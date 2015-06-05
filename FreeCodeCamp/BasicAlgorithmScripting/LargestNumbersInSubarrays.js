function largestOfFour(arr) {
  return arr.map(function(x) {
    return x.reduce(function(a, b) {
      return a > b ? a : b;
    });
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [ 5, 27, 39, 1001 ]
