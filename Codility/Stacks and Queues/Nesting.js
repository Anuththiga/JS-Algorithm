
function solution(S) {
    // Implement your solution here
    /*
    Steps:
    - iterate through S
    - create a stack stS
    - check if stS has open and close brackets
    - if no push the opening bracket
    - if so remove
    - finally if the stack size is empty return 1 else 0
    */

    function isBrackets(character) {
        if("()".includes(character)) return true;
        return false;
    }

    function isMirror(char1, char2) {
        if(char1 == '(' && char2 == ')') return true;
        return false;
    }

    let stackS = [];

    for(let i =0; i<S.length; i++) {
        let lastChar = stackS[stackS.length-1];
        let currentChar = S[i];

        if(isBrackets(currentChar)) {
            if(isMirror(lastChar,currentChar)) stackS.pop();
            else stackS.push(currentChar);
        }
    }
    
    if(stackS.length > 0) return 0;
    return 1;
}
