//Solution 1 (low level with for loop)
function removeDuplicates(arr) {
  // Declare an empty array to store the unique values
  const uniqueArr = [];

  // Loop through the array that was passed in
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not in the unique array, add it
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  //Return the unique array
  return uniqueArr;
}

//Solution 2 (high level with Set Object)
/*
This solution is extremely simple. We take in an array with duplicates and we create a new Set from that array. We then convert that Set back into an array and return it.
The reason that this works is because a Set can only contain unique values. So when we create a Set from an array, it will remove all the duplicates automatically.
 */
function removeDuplicates(arr) {
  const uniqueSet = new Set(arr); //e.g before => [1,1,2,2,3,4] ; after => Set {1,2,3,4}

  const uniqueArr = Array.from(uniqueSet); // before => Set {1,2,3,4}; after => [1,2,3,4]

  //Return the unique array
  return uniqueArr;
}

module.exports = removeDuplicates;
