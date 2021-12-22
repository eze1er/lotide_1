const letterPosition = function(sentence) {
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
letterPosition(sentence);
