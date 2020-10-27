// Given an array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

function extractEachKth(inputArray, k) {
    const result = [];
    for(let i=0; i<inputArray.length; i++) {
        if((i+1) !== 0 && (i+1) % k === 0) continue;
        result.push(inputArray[i]);
    }
    
    return result;
}
