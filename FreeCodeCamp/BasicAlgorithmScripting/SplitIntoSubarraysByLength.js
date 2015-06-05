function chunk(arr, size) {
  var result = [];
  for (i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
      
chunk(['a', 'b', 'c', 'd'], 2); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
