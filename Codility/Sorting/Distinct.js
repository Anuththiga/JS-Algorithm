
function solution(A) {
    // Implement your solution here
    /*
    Steps:
    - iterate through A
    - create a map to store the distint value
    - return the size of map
    */
    let mapA = new Map();
    for(let i=0; i<A.length; i++) {
        if(mapA.has(A[i]) == false) {
            mapA.set(A[i]);
        }
    }
    return mapA.size;
}
