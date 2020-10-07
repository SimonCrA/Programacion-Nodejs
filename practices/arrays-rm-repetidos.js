
let arr = [1, 2, 2, 3, 4, 4, 5];
//la interface Set no permite elementos repetidos, por eso funciona
arr = [...new Set(arr)];
console.log(arr);