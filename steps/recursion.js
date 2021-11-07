let stepsWithRecursion = (n, row = 0, stair = '') => {
    if (n === row) return
    
    if (n === stair.length) {
        console.log(stair)
        return stepsWithRecursion(n, row + 1)
    }
    stair.length <= row ? stair += '#' : stair += ' '
    stepsWithRecursion(n, row, stair)

    // initially, row = 0
    // 1) 0<=0, stair='#'
    // 2) 1<=0, stair='# '
    // 3) 2<=0, stair='#  ' //final o/p of 1st fun call

    // now, n === stair.length, so 2nd if statement executes
    // now, row = 1
    // 4) 0<=1, stair = '#'
    // 5) 1<=1, stair = '##'
    // 6) 2<=1, stair= '## ' //final o/p of 2nd fun call

    // now, n === stair.length, so 2nd if statement executes
    // now row = 2
    // 7) 0<=2, stair = '#'
    // 8) 1<=2, stair= '##'
    // 9) 2<=2, stair= '###' //final o/p of 3rd fun call

    // now row = 3 and return
    // final o/p
    // #
    // ##
    // ###
}

console.log(stepsWithRecursion(3))