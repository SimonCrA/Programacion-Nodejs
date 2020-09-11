/**
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 *  For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3)
 * , print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers 
 * that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of
 *  those).
 */


let printNumbers = () => {

    let isDivByThree = 0;
    let isDivByFive = 0;
    for (let i = 1; i <= 100; i++) {
        
        isDivByThree = isDivisible(i,3);
        if (isDivByThree) {
            console.log('Fizz')
        };
        isDivByFive = isDivisible(i,5);
        if (isDivByFive) {
            console.log('Buzz')
        };

        if (isDivByThree == true && isDivByFive == true) {
            console.log('FizzBuzz');
        }

        if (isDivByThree == false || isDivByFive == false) {
            console.log(i);
        }
    }

}

let isDivisible = (num, by) => {
    if (Number(num) % Number(by) === 0) {
        return true;
    }else {
        return false;
    }
};

printNumbers();

