let input =    [[ 1, 1, 1, 0, 0, 0 ],
                [ 0, 1, 0, 0, 0, 0 ],
                [ 1, 1, 1, 0, 0, 0 ],
                [ 0, 0, 2, 4, 4, 0 ],
                [ 0, 0, 0, 2, 0, 0 ],
                [ 0, 0, 1, 2, 4, 0 ] ]

let hourGlass = (arr) => {
    let newLength = (arr.length / 2);
    let arrSum = [];

    for (let i = 0; i < (arr.length-2); i++) {
        for (let j = 0; j < (arr.length-2); j++) {
            let counter = 0;
            let sumNum = 0;
            for(let k=0; k<newLength; k++) {
                for(let l=0; l<newLength; l++) {
                    counter++;
                    if (counter !== 4 && counter !== 6) {
                        sumNum += arr[k+i][l+j];
                        console.log(`${arr[k+i][l+j]}`);
                    }else {
                        console.log(`${arr[k+i][l+j]}`);
                    }
                }
            }
            arrSum.push(sumNum);

        }
        
    }

    let outputMax = Math.max.apply(Math,arrSum);
    console.log(outputMax);

};

hourGlass(input);