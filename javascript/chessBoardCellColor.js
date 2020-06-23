// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

function chessBoardCellColor(cell1, cell2) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let color = true;
    
    const board = [];
    let row = [];
    
    for(let i=0; i<8; i++) {
        row = [];
        for(let j=0; j<8; j++){
            row.push(color);
            color = !color;   
        }
        color = !color;
        board.push(row);
    }
    
    const input1 = cell1.split('').map(el => {
        el = el.toLowerCase();
        const index = alpha.indexOf(el);
        return index > -1 ? index : +el - 1;
    });
    const input2 = cell2.split('').map(el => {
        el = el.toLowerCase();
        const index = alpha.indexOf(el);
        return index > -1 ? index : +el - 1;
    });
    
    return board[input1[0]][input1[1]] === board[input2[0]][input2[1]];
}

chessBoardCellColor('C8', 'H8');
