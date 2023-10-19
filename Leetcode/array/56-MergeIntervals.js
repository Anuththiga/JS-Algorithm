/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/
var merge = function(intervals) {
    /*
    steps:
    - sort the array
    - create an array output and store intervals[0]
    - create a variable end1 and assign intervals[0][1]
    - iterate through intervals
    - create a variable start2 and assign the first element from the inner array
    - create a variable end2 and assign the second element from the inner array
    - then compare if end1 >= start2, if so, store the max value from (end1,end2) to the output[last element][1]
    - if not store the inner array to output

    */
    intervals.sort((a, b) =>a[0] - b[0]);
    let output = [intervals[0]];
    
    for(let interval of intervals) {
        let end1 = output[output.length -1][1];
        let start2 = interval[0];
        let end2 = interval[1];

        if(end1 >= start2) output[output.length -1][1] = Math.max(end1, end2);
        else output.push(interval)
    }

    return output;
};