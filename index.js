/* Source: https://edabit.com/challenge/NFfYCBEQepsD5mfEk */

/* 

Create a function that takes three parameters where:

    x is the start of the range (inclusive).
    y is the end of the range (inclusive).
    n is the divisor to be checked against.

Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

Examples

arrayOperation(1, 10, 3) ➞ [3, 6, 9]

arrayOperation(7, 9, 2) ➞ [8]

arrayOperation(15, 20, 7) ➞ []

*/

function arrayOperation(x, y, n) {
  //create a result array
  let result = [];
  
  //iterate from index = x to y(included)
  for (let i = x; i <= y; i++) {
    //if current number is divisible by n
    if(i % n === 0) {
      //push number into result array
      result.push(i);
    }
  }
  //return result
  return result;
}

let inputX = 1;
let inputY = 10;
let integer = 3;
let actual = arrayOperation(inputX, inputY, integer);
let expected = [3, 6, 9];

console.log(actual)

function assertArraysEquals(actual, expected, testName) {
  //same length
  let sameLength = actual.length === expected.length;

  //same values
  let sameValues = true;

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      sameValues = false;
      break;
    }
  }

  if (sameLength && sameValues) {
    console.log('test passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}

console.log( assertArraysEquals(actual, expected, 'array operation') )