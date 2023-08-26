// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    /*
        - convert the N to binary
        - loop through binary i, j
        - set i and j to 0 and loop until j hits 1
        - find the difference between them j-i-1
        - set i = j
        - repeat until complete the array

    */
    let binaryN = (N>>>0).toString(2);
    let maxGap = 0;
    
    for(let i=0;i<binaryN.length; i++) {
        for(let j=i+1;j<binaryN.length;j++) {
            if(binaryN[i] == 1 && binaryN[j] == 1 ) {
                let diff = (j-i)-1;
                if(maxGap < diff) {
                    maxGap = diff;
                }
                i=j;
            }
        }
    }
    return maxGap;


}
