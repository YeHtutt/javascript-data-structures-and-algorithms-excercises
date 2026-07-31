function sumOfEvenSquares(numbers) {
  const evenSquares = numbers
    .filter((num) => {
      // Filter out the even numbers from the input array.
      return num % 2 === 0;
    })
    .map((num) => {
      // Square each even number.
      return num ** 2;
    })
    .reduce((sum, squares) => {
      // Accumulate the squared numbers to compute the sum.
      return sum + squares;
    }, 0);

  // Return the sum of squares of even numbers.
  return evenSquares;
}

module.exports = sumOfEvenSquares;
