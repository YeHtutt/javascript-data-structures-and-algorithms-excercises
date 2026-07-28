// Solution 1
function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(arr[0]); //alphabet.indexOf('a'); => startIndex = 0

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] !== alphabet[startIndex + i] ) {
            return alphabet[startIndex + i];
        }
    }
    return '';
}

// Solution 2
function findMissingLetter(arr) {
    // Find the char code of the first letter in the array
    let start = arr[0].charCodeAt(0); // 'a'.charCodeAt(0) = 97; -> start = 97
    
    // Loop through the array
    //first char 'a' is already saved for the start. That's why starting from index 1 -> 'b'
    for(let i = 1; i < arr.length; i++) {
        // Find the char code of the current letter in the array
        const current = arr[i].charCodeAt(0); // 'b'.charCodeAt(0) = 98
        // If the difference between the current char code and the start char code is greater than 1, return the letter that is missing
        if((current - start) > 1) { // at run fourth -> 'f' Unicode = 102, start = 100 -> 102 - 100 = 2
            // Convert the char code to a letter
            return String.fromCharCode(start + 1); // start + 1 because the difference is 2 higher, that's why the missing code must be one higher than the start.
            // String.fromCharCode(101) = 'e'
        }

        start = current; //after first run, start hast the code of 98
    }
    return '';
}

module.exports = findMissingLetter;