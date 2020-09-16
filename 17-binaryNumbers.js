
let binaryNumbers = (n) => {
    let numRem = 0;
    let counter = 0;
    let max = 0;


    while(n>0) {
        numRem = n % 2;
        n = Math.floor(n / 2);
        if (numRem === 1) {
            if (n ===1) {
                counter++;
            }
            counter++;
            max = Math.max(counter,max);
        }else {
            
            max = Math.max(counter,max);
            counter = 0;
        }

        if (n === 1) {
            return max;
        }
    }
};

console.log(binaryNumbers(7));
