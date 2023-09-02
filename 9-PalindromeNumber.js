// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121 ------>>>>> Output:true
// Input: x = 10 ------->>>>> Output:false


const palindromeNumber = function (n) {
    return n === +n.toString().split("").reverse().join("");
    
};

console.log(palindromeNumber(121));