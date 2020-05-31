// Given two strings, find the number of common characters between them.

// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {

    const characters1 = {};
    const characters2 = {};

    s1.split('').forEach(character => characters1.hasOwnProperty(character.toLowerCase()) ? characters1[character]++ : characters1[character] = 1);
    s2.split('').forEach(character => characters2.hasOwnProperty(character.toLowerCase()) ? characters2[character]++ : characters2[character] = 1);

    const lettersInBothStrings = Object.keys(characters1);

    for (let key in characters2)
        if (!lettersInBothStrings.includes(key)) lettersInBothStrings.push(key);

    lettersInBothStrings.forEach(letter => {
        if (!characters1.hasOwnProperty(letter)) characters1[letter] = 0;
        if (!characters2.hasOwnProperty(letter)) characters2[letter] = 0;
    });

    const evaluation = {};
    lettersInBothStrings.forEach(letter => evaluation[letter] = characters1[letter] < characters2[letter] ? characters1[letter] : characters2[letter]);

    return Object.values(evaluation).reduce((acc, val) => acc += val);
}
