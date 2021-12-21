
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};

const head = function(array) {
  if (array === '') {
    return undefined;
  }
  return array[0];
}

// TEST CODE
assertEqual(head([6,5,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");