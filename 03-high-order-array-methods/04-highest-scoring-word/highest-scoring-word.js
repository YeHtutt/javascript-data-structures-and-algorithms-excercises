//Solution 1
function highestScoringWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  const scores = words.map((word) => {
    let score = 0;

    // Loop through each letter in the word and add the score for each letter to the total score
    for (const letter of word) {
      //Each letter of a word scores points, for example a=1; b=2; c=3
      //console.log("a".charCodeAt(0)); // 97; -> 97 - 96 = 1; ->
      score += letter.charCodeAt(0) - 96;
    }
    // console.log(word, score); // Uncomment to see the scores for each word
    // Return the score for the word
    return score;
  });

  // Initialize the highest score and index to 0
  let highestScore = 0;
  let highestIndex = 0;

  // Loop through the scores array
  for (let i = 0; i < scores.length; i++) {
    // If the current score is higher than the highest score, update the highest score and index
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  // Return the word with the highest score
  //words[4] = "taxi"
  return words[highestIndex];
}

//Solution 2
function highestScoringWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Map the array of words to an array of scores
    const scores = words.map((word) => {
        // Reduce the word to a single score
        Array.from(word).reduce(
            (score, letter) => score + letter.charCodeAt(0) - 96,
            0
        )
    });

    // Find the highest score and index
    const highestScore = Math.max(...scores);
    const highestIndex = scores.indexOf(highestScore);

    // Return the word with the highest score
    return words[highestIndex];
}

/*
 * OVERALL PROCESS for Solution 2 *
"man i need a taxi" (str)
        │
        ▼
split(" ")
        │
        ▼
["man", "i", "need", "a", "taxi"]
        │
        ▼
map()
        │
        ├── "man"
        │       │
        │       ▼
        │  Array.from("man")
        │       │
        │       ▼
        │ ["m","a","n"]
        │       │
        │       ▼
        │ reduce()
        │       │
        │       ▼
        │      28
        │
        ├── "i"    → 9
        ├── "need" → 28
        ├── "a"    → 1
        └── "taxi" → 54
        │
        ▼
scores = [28, 9, 28, 1, 54]
        │
        ▼
Math.max(...scores)
        │
        ▼
54
        │
        ▼
scores.indexOf(54)
        │
        ▼
4
        │
        ▼
words[4]
        │
        ▼
"taxi"
 */

module.exports = highestScoringWord;
