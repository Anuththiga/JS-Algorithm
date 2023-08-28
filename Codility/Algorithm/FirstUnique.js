// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    /*
    Steps:
    - iterate through A
    - create an array arrA, map mapA
    - store the element and the count in mapA
    - check if the mapA has val 1 if it has the push the key to arrA
    - then return the first element from the array 

    Edge cases:
    - if no unique number return -1
    */
    
    let mapA = new Map();
    let arrA = new Array();
    for(let i=0; i<A.length; i++) {
        let count = 1;
        if(mapA.has(A[i]) == false) {
           mapA.set(A[i], count);
        }
        else {
            count ++;
            mapA.set(A[i], count)
        }
    }
    
    mapA.forEach((val,key) => {
        if(val == 1) {
            arrA.push(key);
        }
    })
    if(arrA.length == 0) return -1;
    return arrA[0];
   
}
