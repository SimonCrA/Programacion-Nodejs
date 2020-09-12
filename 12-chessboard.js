let chessBoard = (size) => {

    for(let i=0; i<size; i++) {

        let output = '';
        for(let j=0; j<size; j++){

            if(i % 2 == 0){
                if(j % 2 == 0){
                    output += ' ';
                }else {
                    output += '#';
                }
            }else {
                if(j % 2 == 0){
                    output += '#';
                }else {
                    output += ' ';
                }
            }

        }

        console.log(output);

    }

};

chessBoard(8);