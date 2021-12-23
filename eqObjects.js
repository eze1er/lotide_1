// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  let index = 0;
  if (obj1.length !== obj2.length) {
    return false;
  }

  for (const key1 of obj1) {
    for (const key2 of obj2) {
      if (key1 === key2) {
        if (object1[key1] !== object2[key2]) {
          return false;
        } else {
          index = 1;
        }
      }
    }
    if (index === 0) {
      return false;
    }
  }
  return true;
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