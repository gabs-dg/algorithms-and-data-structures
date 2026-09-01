"use strict";
const findLargestNumberinArray = (nums) => {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
};
console.log(findLargestNumberinArray([2, 5, 4, 10, 300, 2, 20, 4]));
