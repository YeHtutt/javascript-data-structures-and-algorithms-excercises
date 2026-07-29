// Solution 1
function findFirstNonRepeatingCharacter(str) {
    //declare an empty object
    const charCount = {};

    // Count the occurrences of each character
    for(const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        /*
        It checks in charCount-Object if the char alredy exists
        First run -> undefined || 0; 0 + 1 = 1; charCount["a"] = 1
        Second run -> 1 || 0; 1 + 1 = 2; charCount["a"] = 2
        and so on -> charCount["b"] = 2;
        but charCount["c"] = 1 because the char "c" exists only one time
        charCount = {a: 2, b: 2, c: 1}
        That's why the first none repeating char is "c" 
        */
    }

    // Find the first non-repeating character
    for(const char of str) {
        //Checks whether the letter appears exactly once.
        if(charCount[char] === 1) {
            return char;
        }
    }    

    // If no non-repeating character is found, return null
    return null;
}

//Solution 2
function findFirstNonRepeatingCharacter(str) {
    //declare an empty Map-Object, Map(0) {} 
    const charCount = new Map();

    // Loop through the string
    for(const char of str) {
        // If the map already has the current character, increment the count
        //charCount.set(key, value);  Map(1) { "key" => "value"}
        charCount.set(char, (charCount.get(char) || 0) + 1);
        /*
            "a" => 2
            "b" => 2
            "c" => 1
            "d" => 1
            "e" => 1 
        */
    }

    // Loop through the string
    for(const char of str) {
        // If the count of the current character is 1, return the current character
        if(charCount.get(char) === 1) {
            return char;
        }
    }

    // If no characters are repeated, return null
    return null;
}


module.exports = findFirstNonRepeatingCharacter;