/* Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
*/
var numIdenticalPairs = function(nums) {
    /*
    steps:
    - iterate through nums
    - create a map
    - if the element is not there store that element and the count(1) in that map
    - else update the count
    - then iterate the map and get the value
    - if the value is greater than one then (val*val-1)2
    - finally return the output
    */
    let map = new Map();
    
    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1);
        } 
        else {
            map.set(nums[i], 1);
        } 
    }
    let output = 0;
    for(let num of map) {
       if(num[1] > 1) {
           let calc = (num[1] * (num[1]-1)) / 2;
           output = output + calc;
       } 
    }
    return output;
};