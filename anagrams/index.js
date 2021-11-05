// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function anagrams(stringA, stringB) {
    let obj1 = charMap(stringA)
    let obj2 = charMap(stringB)

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false
        return true
        // if the no of occurence of each character matches then we know that both strings consist 
        // of the same characters
    }
}

let charMap = str => {
    let obj = {}
    for (char of str.replace(/[^\w]/g, "").toLowerCase()) {
        obj[char] ? obj[char] += 1 : obj[char] = 1
    }
    return obj
}

let cleanUp = str => str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
let anagrams2 = (string1, string2) => cleanUp(string1) === cleanUp(string2)

module.exports = anagrams
