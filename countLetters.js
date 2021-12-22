// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};
const countLetters = function(sentence) {
  let newArray = {};
  let count = 0;
  // we lower letter first to have all in same value
  // then we split it for to read it like element of array
  let array = sentence.toLowerCase().split('');
  // loop in the sentence
  for (const array1 of array) {
  // the space is not count
    if (array1 !== ' ') {
      // loop for each letter
      array.forEach(element => {
        if (element === array1) {
          count++;
        }
      });
      newArray[array1] = count;
      count = 0;
    }
  }
  return newArray;
};
// TEST CODE
