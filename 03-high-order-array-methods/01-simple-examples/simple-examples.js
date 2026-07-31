const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubleNumbers = numbers.map((num) => num * 2 );
console.log('doubleNumbers: ',doubleNumbers);


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log('evenNumbers: ', evenNumbers);

const numbersGreaterTwo = numbers.filter((num) => num > 2);
console.log('numbersGreaterTwo: ', numbersGreaterTwo);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
// Syntax-reduce; array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const sum = numbers.reduce((total, num) =>{
    return total + num
}, 0); //start from 0
console.log('totalSum: ',sum);


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
const arrayNums = numbers.forEach((num) => console.log('arryNum: ',num)); 


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
const foundNumber = numbers.find((num) => num > 2);
console.log('foundNumber: ', foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log('hasEvenNumber:', hasEvenNumber);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNumsGeraterThanZero = numbers.every((num) => num > 0);
console.log('allNumsGeraterThanZero: ', allNumsGeraterThanZero);

