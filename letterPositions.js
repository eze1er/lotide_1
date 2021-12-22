const assertArraysEqual = function(array1, array2) {
  // console.log(array1, array2);
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  return true;
};

const letterPositions = function(sentence) {
  let newArray = {};
  let position = [];
  let count = 0;
  // we lower letter first to have all in same value
  // then we split it for to read it like element of array
  let array = sentence.toLowerCase().split('');
  // loop in the sentence
  for (const array1 of array) {
  // the space is not count
    if (array1 !== ' ') {
      // loop for each letter
      for (let i = 0; i < array.length; i++) {
        if (array[i] === array1) {
          position.push(i + 1);
        }
      };
      newArray[array1] = position;
      count = 0;
      position = [];
    }
  }
  console.log(newArray);
  return newArray;
};
// TEST CODE
const sentence = "lighthouse in the house";
letterPositions(sentence);
assertArraysEqual(letterPositions("lighthouse").h, [4, 6]);
