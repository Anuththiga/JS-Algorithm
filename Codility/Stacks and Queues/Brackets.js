
function solution(S) {
    // Implement your solution here
    /*
    S = "{[()()]}"

    S = "{[()()]}"
         ^
    St = {

    S = "{[()()]}"
          ^
    St = {[

    S = "{[()()]}"
           ^
    St = {[(

    S = "{[()()]}"
            ^
    St = {[  

    S = "{[()()]}"
             ^
    St = {[(

    S = "{[()()]}"
              ^
    St = {[

    S = "{[()()]}"
               ^
    St = {

    S = "{[()()]}"
                ^
    St = 

    Steps:
    - iterate through S
    - create a stack St
    - push the brackets from the begining
    - if the open and closing bracket matched then remove that bracket
    - finally return 1 if the size of the stack is 0 else return 0

    Edge cases:
    ")("

    */

    //check if all are brackets
    function isBrackets(brackets) {
        if("{[()]}".includes(brackets)) return true;
        return false;
    }

    function isMirror(char1, char2) {
        if(char1 == "{" && char2 == "}") return true;
        if(char1 == "(" && char2 == ")") return true;
        if(char1 == "[" && char2 == "]") return true;
        return false;
    }

    let stack = [];

    for(let i =0; i<S.length; i++) {
        let lastChar = stack[stack.length-1];
        let inputChar = S[i];

        if(isBrackets(inputChar)) {
        if(isMirror(lastChar,inputChar)) stack.pop();
        else stack.push(inputChar);        
        }
    }
     if(stack.length > 0) return 0;
    return 1;  
}