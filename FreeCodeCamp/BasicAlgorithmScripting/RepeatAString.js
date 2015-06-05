function repeat(str, num) {
  var result = '';
  if (num > 0)
    for (i = 0; i < num; i++)
      result += str;
  return result;
}

repeat('abc', 3); // 'abcabcabc'
