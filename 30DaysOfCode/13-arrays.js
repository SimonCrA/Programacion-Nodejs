let arr = (input) => {

    let outputStr = ''
    for (let i = input.length -1; i >= 0; i--) {
       outputStr += `${input[i]} ` 
    }
    outputStr.trim();
    console.log(outputStr);
}

let inputArr = [1, 4, 3, 2];
arr(inputArr);