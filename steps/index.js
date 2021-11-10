// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  ' 'r0c0 r0c1'
//       '## ' 'r1c0 r1c1 r1c2'
//       '###' 'r2c0 r2c1 r2c2'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = ''
        for (let col = 0; col < n; col++) {
            if (row >= col) {
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair)
    }
}
console.log(steps(3))

module.exports = steps
