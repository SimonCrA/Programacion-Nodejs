

function modifyArray(nums) {
    let arrOut = [];
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 === 0) {
            arrOut.push(nums[i]*2);
        }else {
            arrOut.push(nums[i]*3);
        }
    
    }
    console.log(arrOut);
}

let main = (strIn) => {

    let splitted = strIn.split('\n');
    let quantity = splitted[0];
    let arrString = splitted[1].split(' ');
    let nums = arrString.map(x => parseInt(x));
    modifyArray(nums);

}
const strIn = `5
1 2 3 4 5`  
main(strIn);