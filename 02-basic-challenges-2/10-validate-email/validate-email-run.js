const validateEmail = require('./validate-email');

const result1 = validateEmail('jonny@gmail.com');
const result2 = validateEmail('jonnygmail.com');


console.log(result1);
console.log(result2);