//input
let arr = [7, 69, 2, 221, 8974];

// this function calculates the sum of array items, excluding the min number of the array
let minSumFn = (arr, start, howMany) => {

    let minSum = 0;
    let removed = Number(arr.splice(start,howMany));
    for(let i=0; i<arr.length; i++){
        minSum += arr[i];
    };
    arr.splice(start,0,removed);
    return minSum;
    
};
// this function calculates the sum of array items, excluding the max number of the array
let maxSumFn = (arr, start, howMany) => {

    let maxSum = 0;
    arr.splice(start,howMany);
    for(let i=0; i<arr.length; i++){
        maxSum += arr[i];
    };
    return maxSum;
};

//main function, obtain the input and calculates the min and max number of the array, it calls
//sum functions, and it returns the sum of min and max of the array 
function miniMaxSum(arr) {

    let minNumber = Math.min.apply(Math,arr);
    let maxNumber = Math.max.apply(Math,arr);
    let indexMin = 0;
    let indexMax = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        if (minNumber === arr[i]) {
            indexMin = i;
        }else if (maxNumber === arr[i]) {
            indexMax = i
        }
        
    }
    
    let min = minSumFn(arr,indexMax,1);
    let max = maxSumFn(arr,indexMin,1);
    console.log(min + ' ' + max);

};


miniMaxSum(arr);

