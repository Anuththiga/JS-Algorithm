
function solution(A) {
    // Implement your solution here
    /*
    steps:
    - iterate through A
    - if A[i] is negative then change that to positive number
    - create a map
    - push the value to the map
    */

    let map = new Map();
    for(let i=0; i<A.length; i++) {
        if(A[i] < 0) {
            A[i] = Math.abs(A[i])
        }
        if(map.has(A[i]) == false) {
            map.set(A[i]);
        }
    }
    return map.size;
}
