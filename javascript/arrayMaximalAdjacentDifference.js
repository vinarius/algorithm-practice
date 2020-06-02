// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
    let maxDifference = 0;

    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i] - inputArray[i - 1] > maxDifference && i - 1 >= 0) maxDifference = inputArray[i] - inputArray[i - 1];
        if(inputArray[i] - inputArray[i + 1] > maxDifference && i + 1 < inputArray.length) maxDifference = inputArray[i] - inputArray[i + 1];
    }

    return maxDifference;
}
