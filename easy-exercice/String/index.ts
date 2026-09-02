const wordLength = (str: string): number => 
{
   let length: number = 0;
   const subArr: string[] = str.trim().split(" ");
   const lastIndex: string = subArr[subArr.length - 1];
   const arr: string[] = lastIndex.split("");

  length = arr.length;

   return length
}

console.log(wordLength("Eu sou um programador em evolução"))