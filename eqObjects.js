// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  return false;
};

// we callback this function for compare in case of the value is array
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // we put it in array obj1 and obj2 to know the length, the we can check the length for compare 
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  let index = 0;
  // when the length is not equal, they aren't same 
  if (obj1.length !== obj2.length) {
      return false;
  }
  for (const key1 of obj1) {
    if (!Array.isArray(object1[key1])) {
    // when the key value is not array we do this
      if (object1[key1] !== object2[key1]) {
        return false;
      } else {
        index = 1;
      }
    } else {
      // when the key value is array we do this
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      } else {
        index = 1;
      }
    }
  }
  if (index === 0) {
    return false;
  } else {
    return true;
  }
}; 

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
const abf = { c: "3", a: "1", b: "2" };
const abd = { a: "1", b: "3", c: "3" };
assertEqual(eqObjects(ab, abc), false); 
assertEqual(eqObjects(abc, abd), false); 
assertEqual(eqObjects(ab, abd), false); 
assertEqual(eqObjects(abd, abf), false); 
assertEqual(eqObjects(ba, abf), false); 
assertEqual(eqObjects(abd, abf), false); 
assertEqual(eqObjects(abc, abf), true); 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);; // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false