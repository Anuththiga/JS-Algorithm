// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
    /*
    steps:
    - iterate through S
    - create stack
    - push one by one
    - if next two elements are same then remove
    - finally return the stack

    Edge cases:
    - if the stack is empty return ""
    - if there is no change then return the string
    */
    let stackS = [];

    function isSame(char1, char2) {
        if(char1 == char2) return true;
        else return false;
    }

    for(let i=0; i<S.length; i++) {
        let finalVal = stackS[stackS.length-1];
        let pushingVal = S[i];

        if(isSame(finalVal, pushingVal)) stackS.pop();
        else stackS.push(pushingVal);
    }
    return stackS.join('');
}
