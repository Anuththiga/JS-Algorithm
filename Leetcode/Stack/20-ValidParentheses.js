/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/
var isValid = function(s) {
    /*
    steps:
    - create a stack st
    - create a function (checkValid) to check the opening and closing occurrence for each type of parantheses
    - iterate through the array
    - call the checkValid to check if the existing bracket and the pushed bracket are in correct order
    - if so, pop the existing brackets, else push it
    - finally return false if the stack length > 0 otherwise true

    Edge cases:
    - if array of S length is 1 return false
    */
let stack = [];
    function checkValid(prev, curr) {
        if( prev == "(" && curr == ")" ) return true;
        if( prev == "[" && curr == "]" ) return true;
        if( prev == "{" && curr == "}" ) return true;
        return false;
    }
    for(let i=0; i<s.length; i++) {
        let prevVal = stack[stack.length-1];
        let newVal = s[i];

        if(checkValid(prevVal, newVal)) stack.pop(); 
        else stack.push(newVal);
    }

    if(stack.length>0) return false;
    else return true;
};