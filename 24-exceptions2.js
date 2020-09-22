
class Calculator {
    
    power(n,p){
        this.n = n;
        this.p = p;
        if(this.n < 0 || this.p < 0){
            console.log('n and p should be non-negative');
        }else {

            console.log(this.n**this.p);
            return;
        }
    }
}

let main = (strIn) => {
    let data = strIn.split('\n');
    let dataLength = data[0];
    try {
        for(let i=1; i<=dataLength; i++){
            let numbers = data[i].split(' ');
            let calc = new Calculator();
            calc.power(parseInt(numbers[0]),parseInt(numbers[1]));
        } 
    } catch (error) {
        console.log(error.message);
    }


}


let input = `4
3 5
2 4
-1 -2
-1 3`
main(input);