const searchIndex = (nums: number[], target: number): number => 
{
   let left: number = 0;
   let right: number = nums.length - 1;

   while (left <= right) 
   {
      const mid: number = Math.floor((left + right) / 2);

      if(target === nums[mid]) return mid
      if(target > nums[mid]) 
      {
         left = mid + 1
      }
      else 
      {
         right = mid - 1
      }
   }
   return left
}

console.log(searchIndex([1,2,3,5,6], 2));