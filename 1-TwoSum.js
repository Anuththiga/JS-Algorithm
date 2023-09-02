// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums,target)
{
    //create map
    //subtract the nums[i] from target keep the remaining val
    //check if the remaining val is in the map
    //if not store the nums[i] and the index
    //if the remaining val is there return the remaining val index, i
    
    let val = new Map();
    let output = [];

    for(let i=0; i<nums.length; i++)
    {
        let remain = target - nums[i];
        if(val.has(remain))
        {
            let temp = val.get(remain);
            output.push(temp);
            output.push(i);
        }
        else
        {
            val.set(nums[i],i);
        }
    }
    return output;
}