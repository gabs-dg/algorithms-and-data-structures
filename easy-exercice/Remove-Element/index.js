"use strict";
const removeElements = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
const numbers = [3, 2, 2, 3];
console.log(removeElements(numbers, 3));

function() {

}