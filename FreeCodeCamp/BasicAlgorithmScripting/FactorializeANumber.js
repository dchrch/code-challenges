function factorialize(num) {
  for (i = num - 1; i > 1; i--) {
    num *= i;
  }
  return num;
}

factorialize(5);
