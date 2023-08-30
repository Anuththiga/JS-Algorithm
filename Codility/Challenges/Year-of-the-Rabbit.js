// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
let count = 0;

function solution(A, B) {
    /*
A = [3, 6, 4, 5]
B = [2, 6, 3, 5]

Steps:
- compare A[i] with B[i]
- if those are not same return 0
- if A[i] = B[i] then rotate B and after each rotation
compare A[i] with B[i]
- if A[i] != B[i] then return the rotation count

Edge cases:
- if that is impossible to rotate B to satisfy then return -1
- if no rotation is needed then return 0
*/

   
    if(A.length > 1) {
    let setA = new Set(A);
        if(setA.size == 1) {
            return -1;

        } else {
            rotate(A,B);
            return count;
        }
    } else if(A.length > 300) return false; 
    
     else {
        rotate (A,B);
        return count;
    }
   

    function rotate(A,B) {
         let common = [];
        for(let i=0; i< A.length; i++) {
            if(A[i] == B[i]) {
                common.push(B[i]);
            }   
        }

        if(common.length > 0) {
            count++;
            let rotatedB = [];
            rotatedB.push(B[B.length-1]);
            for(let i=0; i<B.length-1; i++) {
                rotatedB.push(B[i])
            }
            
            B = rotatedB;
            
            rotate(A,B);
        } else return 0;
       
        
    }
}

