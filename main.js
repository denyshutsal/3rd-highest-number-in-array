"use strict";

// Firday: 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).
// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11
// -------------------
// sort the array in ascending order.
// with array length method and reverse index we can get any number of array from the end
const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];

const highestNnumber = (arr) => {
  let result = null;

  const sortedArr = arr.sort((a, b) => a - b); // [-2, 0, 2,  3,  5, 7, 8, 9, 11, 20, 31]

  result = sortedArr[sortedArr.length - 3]; // 11

  return result;
};

console.log(highestNnumber(arr)); // 11
