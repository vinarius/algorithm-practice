// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.

function evenDigitsOnly(n) {
    n = n.toString().split('');
    return n.every(digit => digit % 2 === 0);
}
