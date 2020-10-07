let funCalc =(num) => {
    if (num === 0) {
        return 1
    }else {
        return num * funCalc(num -1)
    }
}


// Complete the factorial function below.
function factorial(n) {
    
    console.log(funCalc(n));

}

factorial(3);