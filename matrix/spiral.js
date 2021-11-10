let spiral = n => {
    let results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    // [[], [], []]
    let counter = 1
    let startRow = 0
    let startCol = 0
    let endRow = n - 1
    let endCol = n - 1
    while (startCol <= endCol && startRow <= endRow) {
        
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter
            counter++
        }
        //after this we get [[1,2,3], [], []]
        startRow++
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter
            counter++
        }
        //    so, results[1][2] = 4 and results[2][2] = 5
        // now,  [[1,2,3], [_, _, 4], [_,_,5]]
        endCol--
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter
            counter++
        }
        // now, backtracking from last column
        // so now, [[1,2,3], [_,_,4], [7,6,5]]
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter
            counter++
        }
        // now going up, now end row = 1
        // so now, [[1,2,3], [8, _, 4], [7,6,5]]
        startCol++
    }
    // now, in the while loop, 1<=1 (final iteration), so, first for loop matches
     // so now, [[1,2,3], [8, 9, 4], [7,6,5]]
    return results
}

console.log(spiral(3))