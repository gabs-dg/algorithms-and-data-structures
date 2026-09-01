"use strict";
const compareCaracters = (haystack, needle) => {
    //Transformando em um array de string.
    const converHaystackInArray = haystack.split("");
    const convertNeedleInArray = needle.split("");
    for (let i = 0; i <= converHaystackInArray.length - convertNeedleInArray.length; i++) {
        let found = true;
        for (let j = 0; j < convertNeedleInArray.length; j++) {
            if (converHaystackInArray[i + j] !== convertNeedleInArray[j]) {
                found = false;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
};
console.log(compareCaracters("leetcode", "leeto"));
