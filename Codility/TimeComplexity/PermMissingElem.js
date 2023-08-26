function solution(A) {
    /*
    - iterate through A
    - find the real total of N+1 elements
    - subtract from real total - total of A
    */
    let sum = 0
    let aLen = A.length;
    for(let i=0; i<aLen; i++) { 
        sum = sum + A[i];
    }
    let realSum = (aLen+1)*(aLen+2)/2;
    let diff = realSum - sum;

    return diff;
}