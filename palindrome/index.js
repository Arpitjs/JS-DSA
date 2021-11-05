// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // let reversed = ''
    // for(let char of str) {
    //     reversed = char + reversed
    // }
    // return reversed === str 
    return str.split('')
    .every((char, index) => char === str[str.length - index -1])
    //we need to go to the last of the array. for that 
    // in every iteration we need to reduce the index to get there.
}

palindrome('abba')

module.exports = palindrome;
