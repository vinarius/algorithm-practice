// Given two strings, find the number of common characters between them.

// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {

    const characters1 = {};
    const characters2 = {};

    s1.split('').forEach(element => characters1.hasOwnProperty(element.toLowerCase()) ? characters1[element]++ : characters1[element] = 1);
    s2.split('').forEach(element => characters2.hasOwnProperty(element.toLowerCase()) ? characters2[element]++ : characters2[element] = 1);

    const lettersInBothStrings = [];

    for (let key in characters1)
        lettersInBothStrings.push(key);

    for (let key in characters2)
        if (!lettersInBothStrings.includes(key)) lettersInBothStrings.push(key);

    lettersInBothStrings.forEach(letter => {
        if (!characters1.hasOwnProperty(letter)) characters1[letter] = 0;
        if (!characters2.hasOwnProperty(letter)) characters2[letter] = 0;
    });

    const evaluation = {};
    lettersInBothStrings.forEach(letter => evaluation[letter] = characters1[letter] < characters2[letter] ? characters1[letter] : characters2[letter]);

    let result = 0;
    for (let key in evaluation)
        result += evaluation[key];

    return result;
}
