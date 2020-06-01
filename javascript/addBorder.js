// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
    picture = picture.map(el => {
        el = el.split('');
        el.unshift('*');
        el.push('*')
        return el.join('');
    });
    const borderLength = picture[0].length;
    picture.unshift(''.padStart(borderLength, '*'));
    picture.push(''.padStart(borderLength, '*'));
    return picture;
}
