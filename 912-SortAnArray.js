// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

/*-------------------------------------------Bubble sort----------------------------------------------*/
var sortArray = function(nums) {
    let count = 0;
    let swap = true;

    while(swap) {
        swap = false;
        for(let i=0; i<nums.length-count;i++) {
            let j = i+1;
            if(nums[i]>nums[j]) {
                [nums[i],nums[j]] = [nums[j],nums[i]];
                swap = true;
            }
        }
        count++;
    }

   
    return nums;
};