function fizzbuzzArray(num) {
    //declare an empty string to store the results
    let arr = [];

    // Loop through the numbers from 1 to the number passed in
    for(let i = 1; i <= num ; i++) {
        // If the number is divisible by 3 and 5, add 'FizzBuzz' to the array
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        } // If the number is divisible by 3, add 'Fizz' to the array
        else if(i % 3 === 0) {
            arr.push('Fizz');
        } // If the number is divisible by 5, add 'Buzz' to the array
        else if(i % 5 === 0) {
            arr.push('Buzz');
        } // Otherwise, add the number to the array 
        else {
            arr.push(i);
        }
    }

    return arr;
}


module.exports = fizzbuzzArray;