
function solution(A, B, K) {
    // Implement your solution here
    let count = 0;
    if(A%K == 0) count=1;

    return parseInt(B/K) - parseInt(A/K) + count;
}