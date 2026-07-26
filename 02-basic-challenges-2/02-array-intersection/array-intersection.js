//Solution 1
function arrayIntersection(arr1, arr2) {
    // Declare an empty array to store the intersection
    const intersectionArr = [];

    //loop through arr1
    for(let i = 0; i < arr1.length; i++) {
        // If the current element is in arr2 and not already in the intersection array, add it 
        if(arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
            intersectionArr.push(arr1[i]);
        }
    }

    return intersectionArr;
}

//Solution 2
function arrayIntersection(arr1, arr2) {
    // Declare an empty array to store the intersection
    const intersectionArr = [];

    // Create a set from arr1
    const set1 = new Set(arr1);

    // Loop through arr2
    for(let num of arr2) {
        // If the current number is in set1, add it to the intersection array
        if(set1.has(num)){
            intersectionArr.push(num);
        }
    }
    return intersectionArr;
}

module.exports = arrayIntersection;