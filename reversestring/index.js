// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let reversed = ''
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i]
    // }
    // return reversed
    // for (let char of str) {
    //     reversed = char + reversed
    //     // 'a' + '', 'ra', 'pra', 'ipra', 'tipra'
    // }
    // return reversed
    return str.split('')
    .reduce((acc, cur) => cur + acc, '')
}
reverse('arpit')
module.exports = reverse;
