const compareCaracters = (haystack: string, needle: string): number => 
{
       //Transformando em um array de string.
       const converHaystackInArray: string[] = haystack.split("");
       const convertNeedleInArray: string[] = needle.split("");

       for (let i: number = 0; i <= converHaystackInArray.length - convertNeedleInArray.length; i++)
              {
                  let found: boolean = true;
              
                  for (let j: number = 0; j < convertNeedleInArray.length; j++)
                  {
                      if (converHaystackInArray[i + j] !== convertNeedleInArray[j])
                      {
                          found = false;
                      }
                  }
              
                  if (found)
                  {
                      return i;
                  }
              }

       return -1
}

console.log(compareCaracters("leetcode", "leeto"));