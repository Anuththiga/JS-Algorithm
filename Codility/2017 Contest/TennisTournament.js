
function solution(P, C) {
    // Implement your solution here
    /*
    steps:
    - divide P by 2; get the quotient
    - if quotient is greater than C return C
    - else return quotient
    */

    let play = P/2;
    let roundPlay = Math.floor(play);
    if(roundPlay >= C) {
        return C;
    } else return roundPlay;
}
