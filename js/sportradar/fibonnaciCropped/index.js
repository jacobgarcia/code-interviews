const fibbonacciCropped = (n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    if (i % 5 !== 0 && i % 7 !== 0) {
      sum += i;
    }
  }
  
  return sum;
}
