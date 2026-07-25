function reverseString(str) {
    console.log(str.split('').reverse().join(''));
}

function reverseString(str) {
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--) {
        // console.log(str[i]);
        reversed += str[i];
    }

    return reversed;
}


module.exports = reverseString;