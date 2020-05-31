// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
    n = n.toString();
    const firstHalf = n.slice(0, (n.length / 2)).split('').map(el => +el);
    const secondHalf = n.slice((n.length / 2)).split('').map(el => +el);

    const firstSum = firstHalf.reduce((acc, val) => acc += val);
    const secondSum = secondHalf.reduce((acc, val) => acc += val);

    return firstSum === secondSum;
}