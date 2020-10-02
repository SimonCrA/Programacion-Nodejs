

let isPrime = (n) => {
    if (n === 1) {
        return 'Not prime';
    }
    
    for(let j=2; j*j<=n; j++){
        if(n % j === 0){
            return 'Not prime';
        }
    }
    return 'Prime';
}

function processData(input) {
    //Enter your code here
    let dataSplitted = input.split('\n');

    for(let i=1; i<dataSplitted.length; i++) {
        console.log(isPrime(Number(dataSplitted[i])));
    }
}
const strIn = `2
31
33`
processData(strIn);