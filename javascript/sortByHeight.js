// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
    const people = a.filter(element => element !== -1).sort((a, b) => a - b);
    const treeIndexes = a.map((element, index) => {
        if(element === -1) return index;
    }).filter(el => el !== undefined);

    let counter = people.length - 1;
    return a.map((el, index) => {
        if(treeIndexes.includes(index)) return -1;
        counter++;
        return people[counter - people.length];
    });
}
