// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
 let chunked = []
 array.forEach(el => {
     let lastEl = chunked[chunked.length -1]
    if(!lastEl || lastEl.length === size) {
        //when there is no sub chunk inside the chunk 
        // OR
        // when the size of the sub chunk is full, create a new chunk
        chunked.push([el])
    } else {
        // push into the sub chunk until the sub chunk is full
        lastEl.push(el)
    }
 })
 return chunked
}

function chunk2(array, size) {
    let chunked = []
    let index = 0 
    while(index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size
    }
    return chunked
   }

console.log(chunk2([1,2,3,4,5], 2))

module.exports = chunk
