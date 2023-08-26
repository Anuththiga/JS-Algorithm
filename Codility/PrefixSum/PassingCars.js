// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//------------------------------------------------bruteforce--------------------------------
function solution1(A) {
    // Implement your solution here
    /*
    Steps:
    - create a count
    - iterate through the array A
    - check if A[i] = 0 and A[j] = 1
    - if the condition is true count++
    - return count

    Edge:
    - if count exceeds 1,000,000,000 return -1
    */
    let count = 0;
    for(let i = 0; i<A.length; i++) {
        for(let j=i+1; j<A.length; j++) {
            if(A[i] == 0 && A[j] == 1) {
                count++;
            }
        }
    }
    return count;
}

//--------------------------------------------Efficient way-----------------------------------------
function solution1(A) {
    // Implement your solution here
    /*
    Steps:
    - iterate the array
    - create a variable E and if car passes in east increment by 1
    - create a variable W and if car passes in west then
    W = W+ E;
    - return W

    Edge:
    - if count exceeds 1,000,000,000 return -1
    */
    let carGoingEast = 0;
    let passedCars = 0;
    for(let i = 0; i<A.length; i++) {
        if(passedCars > 1000000000) return -1;

        if(A[i] == 0) carGoingEast++;
        if(A[i] == 1) passedCars = passedCars+carGoingEast;
    }
    
    return passedCars;
}