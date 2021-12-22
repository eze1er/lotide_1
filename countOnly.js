// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let newItem = {};
  let count = 0;
    
  for (key in itemsToCount) {
    // we check if the key is a property
    if (itemsToCount.hasOwnProperty(key) && itemsToCount[key] === true) {
      //  loop in the array to count the exiting key
      allItems.forEach(element => {
        if (key === element) {
          count++;
        }
      });
      // create a new object property
      if (count > 0) {
        newItem[key] = count;
        count = 0;
      }
    }
  }
  return newItem;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);