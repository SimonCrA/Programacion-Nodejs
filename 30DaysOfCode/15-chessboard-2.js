let board = [ 
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    ['_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_'],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] 
]
  
console.log(board.join('\n') + '\n\n')

//   Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = '_'
console.log(board.join('\n'))