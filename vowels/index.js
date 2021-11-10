// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowels = 0
    str.toLowerCase().split('')
        .forEach(char => {
            if (char === 'a' ||
                char === 'e' ||
                char === 'i' ||
                char === 'o' ||
                char === 'u'
            ) {
                vowels += 1
            }
    })
    return vowels

}

let findVowels = str => {
    let count = 0;
    let cases = ['a', 'e', 'i', 'o', 'u']
    for(let char of str) {
        if(cases.includes(char)) count ++
    }
    return count
}

let withRegex = str => {
   let matches = str.match(/[aeiou]/gi)
   return matches.length ? matches.length : 0
}

console.log(withRegex('Why do you ask?'))
module.exports = vowels;
