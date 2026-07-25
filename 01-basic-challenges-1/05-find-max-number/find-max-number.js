// Solution 1 - Simplest solution (high level)
function findMaxNumber(array) {
  // Math.max() can take any number of arguments, so we can use the spread operator
  return Math.max(...array);
}

// Solution 2 - more understandable (low level)
function findMaxNumber(array) {
  // Declare a variable to store the maximum number and initialize it to the first element in the array
  let maxNumber = array[0];

  // Loop through the array starting at the second element. The second element because the maximum number has been set to the first element
  for (let i = 1; i < array.length; i++) {
    // If the current element is greater than the maximum number, set the maximum number to the current element
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  // Return the maximum number
  return maxNumber;
}

module.exports = findMaxNumber;
