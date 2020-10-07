/**
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 *  For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3)
 * , print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers 
 * that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of
 *  those).
 */

let isDivisible = (num,by) => {
    if(Number(num) % Number(by) === 0){
        return true
    }else {
        return false
    }
}

function fizzBuzz(n) {
    // Write your code here
    let isDivisbleBy3 = 0
    let isDivisbleBy5 = 0
    for(let i=1; i<=n; i++){
        
        isDivisbleBy3 = isDivisible(i,3)
        isDivisbleBy5 = isDivisible(i,5)
        
        if(isDivisbleBy3 === true && isDivisbleBy5 === true) {
            console.log('FizzBuzz')
        }else if(isDivisbleBy3){
            console.log('Fizz')
        }else if(isDivisbleBy5) {
            console.log('Buzz')
        }else if(isDivisbleBy3 === false && isDivisbleBy5 === false){
            console.log(i)
        }
    }

}

fizzBuzz(100);
