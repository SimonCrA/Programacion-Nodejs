function getSecondLargest(nums) {
    // Complete the function
    let largest = 0;
    let sndLargest = 0;
    for(let i=0; i<nums.length; i++){
        let dataNums = parseInt(nums[i]);
        if(dataNums>largest){
            sndLargest = largest;
            largest = dataNums;
        }

        if (dataNums>sndLargest && dataNums<largest) {
            sndLargest = dataNums;
        }
    }
    
    console.log(`largest: ${largest}`);
    console.log(`second largest: ${sndLargest}`);
}

let main = (input) =>{

    let data = input.split('\n');
    const numsData = data[0];
    let nums = data[1].split(' ');
    const nums1 =nums.map(x => parseInt(x));
    getSecondLargest(nums1)
}


const strIn = `5
5 3 6 6 2`;
main(strIn);