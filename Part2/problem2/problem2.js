function fibo(n) {
  let FIRST_FIBONACCI_NUMBER = 0, SECOND_FIBONACCI_NUMBER = 1;
  let fibonacciSequence = [FIRST_FIBONACCI_NUMBER, SECOND_FIBONACCI_NUMBER];

  for (let index = fibonacciSequence.length; index <= n; index++) {
    fibonacciSequence.push(fibonacciSequence[index-1] + fibonacciSequence[index-2]);
  }

  return fibonacciSequence[n];
}

module.exports = fibo;
