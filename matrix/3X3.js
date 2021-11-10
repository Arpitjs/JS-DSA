// [[1,2,3],[4,5,6],[7,8,9]]

let matrix = n => {
    let results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    let counter = 1
    let startRow = 0
    let startCol = 0
    let endRow = n - 1
    let endCol = n - 1
    while (startCol <= endCol && startRow <= endRow) {
        for(let i = startCol; i<=endCol; i++) {
            results[startRow][i] = counter
            counter ++
        }
        startRow ++
    }
    return results
}

console.log(matrix(3))