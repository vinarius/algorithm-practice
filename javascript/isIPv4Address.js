// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.

// There is no first number.

function isIPv4Address(inputString) {
    return /^(((2[0-5][0-5])|(2[0-4][0-9])|(1[0-9]?[0-9])|([1-9]?[0-9])|([0-9]))\.){3}((2[0-5][0-5])|(2[0-4][0-9])|(1[0-9]?[0-9])|([1-9]?[0-9])|([0-9]))$/.test(inputString);
}

for(let i=0; i<256; i++) {
    for(let j=0; j<256; j++) {
        for(let k=0; k<256; k++) {
            for(let z=0; z<256; z++) {
                const ip = [i, j, k, z].join('.');
                if(!isIPv4Address(ip)) {
                    console.log(ip);
                    break;
                }
            }
        }
    }
}