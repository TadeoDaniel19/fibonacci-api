function fibonacciSerie(n) {
  if(n < 2) {
    return n;
  }
  else {
    return Number(fibonacciSerie(n - 2)) + Number(fibonacciSerie(n - 1));
  }
}

module.exports = fibonacciSerie;