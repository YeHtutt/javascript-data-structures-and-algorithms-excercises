function titleCase(str) {
    // Split the string into an array of words and make all characters into lowercase
    const words = str.toLowerCase().split(' ');

    // console.log(words);

    // Loop through the array of words
    for(let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word (e.g.  'H'), first loop
        // Add the copy of lowercase letters from the second letter to the end of each word (e.g.  + 'ello'), first loop
        // before => hello , after => Hello
       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Concatenate the array of words into a string using a space, and return it
    return words.join(' ');
}

module.exports = titleCase;