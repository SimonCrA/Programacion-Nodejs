let swap = (num1, num2) => {
    let temp = num1;
    num1 = num2;
    num2 = temp;
/*
 * other way to reorder this two numbers adding and substracting
 *   num1 = num1+num2;
 *   num2 = num1-num2;
 *   num1 = num1-num2;
 * 
 * Another one, in one line (yep, i know is crazy)
 *    num2 = num1+(num1=num2)-num2;
 * with float numbers
 * num2 = num1 + (num1=num2, 0)
*/

    return [num1,num2];
}

function main() {
    let n = 3;
    let a = ['3','2','1'];
    a = a.map(Number);
    let numberOfSwaps = 0;
    // Write Your Code Here
    // console.log(`${n} : ${a}`);
    for (let i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
        
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let swapped = swap(a[j], a[j + 1]);
                a[j] = swapped[0];
                a[j+1] = swapped[1];
                numberOfSwaps++;
            }
        }
        
        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }

    console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);

}


main();
