
/* Complete the function in the editor below by returning a RegExp object,
 * that matches any string  that begins and ends with the same vowel. 
 * Recall that the English vowels are a, e, i, o, and u.
 */

function regexVar() {
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // + => for 1 or more occurrances (this ensures str length > 3)
    // \1 => matches to previously stored match. 
        // \2 looks for matched item stored 2 instances ago 
        // \3 looks for matched item stored 3 ago, etc
    
    //  $ ensures that matched item is at end of the sequence
    
        let re = /^([aeiou]).+\1$/;
        return re;
}

function regexVar2() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    let rex = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$');

    /*
     * Do not remove the return statement
     */
    return rex;
}

function regexVar3() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    let rexx = new RegExp('\\d+', 'g');

    /*
     * Do not remove the return statement
     */
    return rexx;
}


function main() {
    const re = regexVar();
    const rex = regexVar2();
    const rexx = regexVar3();
    const s = 'abcda';
    const s2 = 'Mr.X';
    const s3 = '102, 1948948 and 1.3 and 4.5';

    const r = s3.match(rexx);
    
    for (const e of r) {
        console.log(e);
    }
    
    console.log(re.test(s));
    console.log(rex.test(s2));
}

main();

    