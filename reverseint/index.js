// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = n.toString()
        .split('')
        .reverse()
        .join('')
    return Math.sign(n) * parseInt(reversed)
    //change num to string then reverse it
    // parse int changes 005 to just 5
    // math sign returns -1 for negative nums
}
reverseInt(500)

module.exports = reverseInt;
