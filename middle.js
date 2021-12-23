const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  // console.log(array1, array2);
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  return true;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  //...
  if (array.length < 3) {
    return [];
  }
  let newArray = [];
  let index = Math.trunc(array.length / 2);
  if ( array.length % 2 !== 0) {
    newArray.push(array[index]);
    return newArray; 
  }
    newArray.push(array[index - 1], array[index]);
    return newArray; 
}

// TEST CODE

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

eqArrays(middle([1, 2, 3]), [ 2]); // => should PASS
eqArrays(middle([1, 2, 3, 4, 5, 7]), [3, 4]); // => true
eqArrays(middle([1, 2, 3, 7, 9, 4, 12, 5]), [7, 9]); // => false

assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 7, 9, 11]), [3, 7]); // => true
assertArraysEqual(middle([7, 8, 9, 5, 2, 3]), [9, 5]); // => false

assertArraysEqual(middle(["1", "2"]), []); // => true
assertArraysEqual(middle([]), []); // => false
assertArraysEqual(middle(["1"]), []); // => false