"use strict";
const searchIndex = (nums, target) => {
    // for(let i = 0; i < nums.length; i++) 
    // {
    //    if(target === nums[i]) 
    //    {
    //       return i;
    //    }
    //    if (target < nums[i]) 
    //    {
    //       return i;
    //    }
    // }
    // return 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target === nums[mid])
            return mid;
        if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
};
console.log(searchIndex([1, 2, 3, 5, 6], 2));
