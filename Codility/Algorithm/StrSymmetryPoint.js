
function solution(S) {
    // Implement your solution here
    /*
    Steps:
    - convert the string to an array
    - divide the array into two with center element
    - reverse right part
    - covert to string
    - check both the strings are same
    - if so return center element

    Edge cases:
    - return -1 if no such index exists
    - if string length is zero return -1
    - if array length is one return 0
    */

    const arrS = S.split("");
    if(arrS.length == 0) return -1;
    if(arrS.length == 1) return 0;
    
    let startIndex = 0;
    let centerIndex = (arrS.length+1)/2;
    let endIndex = arrS.length;
    let leftElem = arrS.slice(startIndex, centerIndex-1);
    let rightElem = arrS.slice(centerIndex, endIndex);
    let reversedElem = rightElem.reverse();

    if(leftElem.join() == reversedElem.join()) {
        return centerIndex-1;
    } else return -1;
        
}