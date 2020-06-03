// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    let alphabet = [];
    for (let i = 0; i < 26; i++)
        alphabet.push(String.fromCharCode(i + 65));

    alphabet = alphabet.map(el => el.toLowerCase());
    
    return inputString.split('').map(letter => {
        const index = alphabet.indexOf(letter);
        return index === alphabet.length - 1 ? alphabet[0] : alphabet[index + 1];
    }).join('');
}
