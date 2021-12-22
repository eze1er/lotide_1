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
const without = function(array1, array2) {
  let newArray = [];
  for (const array of array1) {
    let index = 0;
    array2.forEach(element => {
      if (element === array) {
        index = 1;
      }
    });
    if (index === 0) {
      newArray.push(array);
    }
  }
  return newArray;
}

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false 
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // => should PASS
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), [3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []); // => true
assertArraysEqual(without(["1", "2", "3"], ["1", "2", 3]), [ '3']); // => false
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]