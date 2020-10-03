var nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5 = document.getElementById("btn5");

btn5.onclick=function() {
    console.log('presionado el boton 5')
    nums.unshift(nums.pop());
    for (i=0; i<=7; i++) {
        let newBtn ="btn" +ids[i];
        document.getElementById(newBtn).innerHTML=nums[i];
    }
}

