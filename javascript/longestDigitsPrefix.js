// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

function longestDigitsPrefix(inputString) {
    const result = [];
    
    inputString = inputString.split('');
    
    for(let i=0; i<inputString.length; i++){
        if(inputString[i].match(/[0-9]/)) result.push(inputString[i]);
        else break;
    }
    
    return result.join('');
}
