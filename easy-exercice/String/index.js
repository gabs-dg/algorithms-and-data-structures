"use strict";
const wordLength = (str) => {
    let length = 0;
    const subArr = str.split(" ");
    for (let i = 0; i < subArr.length; i++) {
        const lastIndex = subArr[subArr.length - 1];
        const arr = lastIndex.split("");
        length = arr.length;
    }
    return length;
};
console.log(wordLength("Eu sou um programador em evolução"));
