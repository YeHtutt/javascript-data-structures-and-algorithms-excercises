function findMissingNumber(arr) {
  //e.g arr = [1, 2, 3, 5];
  // If the array is empty or undefined, return undefined
  if (!arr || arr.length === 0) {
    return undefined;
  }

  // Add 1 to the length of the array to account for the missing number
  const n = arr.length + 1; //e.g n = 4 + 1; n = 5
  // Calculate the expected sum of the numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2; //e.g (5 * 6) / 2 = 15

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
    // 1st -> 0 + 1 = 1;
    // 2nd -> 1 + 2 = 3;
    // 3rd -> 3 + 3 = 6;
    // 4th -> 6 + 5 = 11;
    // actualSum = 11
  }

  return expectedSum - actualSum;
  //eg 15 - 11 = 4 -> number 4 is missing
}

function findMissingNumber(arr) {
  // If the array is empty or undefined, return undefined
  if (!arr || arr.length === 0) {
    return undefined;
  }

  // Add 1 to the length of the array to account for the missing number
  const n = arr.length + 1; //e.g n = 5

  // Calculate the expected sum of the numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2; //e.g (5 * 6) / 2 = 15

  // Calculate the actual sum of the numbers in the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // actualSum = 11
  /* 
    reduce() iterates through each element of the array. 
    On each iteration, it combines the current result (sum) with the current element (num). 
    In the end, exactly one value remains.
    (0) is the user-defined initial value, otherwise it will start iterating from 1
    */

  // Return the difference between the expected sum and the actual sum
  return expectedSum - actualSum;
  //eg 15 - 11 = 4 -> number 4 is missing
}

module.exports = findMissingNumber;
