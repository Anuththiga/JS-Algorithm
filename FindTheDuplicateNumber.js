// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

var findDuplicate = function(nums)
{
    //create a set
    //check the value is there
    //if not add
    //else return the value
    
    const temp = new Set();
    for(let i = 0; i<nums.length; i++)
    {
        if(temp.has(nums[i]) == false)
        {
            temp.add(nums[i]);
        }
        else {
            return nums[i];
        }
    }
}
