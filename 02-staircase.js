/*
    This is a staircase of size n=4:
       #
      ##
     ###
    ####

    Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
    Write a program that prints a staircase of size n.
*/


let repeatFn = (strIn, q) => {
    return strIn.repeat(q);
};

// this function calculate staircase which have the same height and base. it must be trimmed  and to the right.
function staircase(n) {

    let sharp = '#';
    let spaces = ' ';
    let stairCasefirst = '';
    let stairCaseSecond = '';
    let stairCaseFinal = '';

    for(let i=1; i<= n; i++){

        stairCasefirst = repeatFn(spaces, n-i);
        stairCaseSecond = repeatFn(sharp, i);
        stairCaseFinal = stairCasefirst.concat(stairCaseSecond);
        console.log(stairCaseFinal);
        
    };

}

staircase(10);

module.exports = staircase;