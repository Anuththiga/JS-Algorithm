// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here
    
    while(K>0) {
        let newA = [];
        newA.push(A[A.length-1]);
        for(let i =0; i<A.length-1; i++) {
            newA.push(A[i])
        }
      A = newA;
       
    K--;    
    }
    return A;
}

console.log(solution([2,1,4,6],3))