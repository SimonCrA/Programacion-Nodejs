

let kangaroo = (x1,v1,x2,v2) => {

    if (x1 > x2 && v1 > v2) {
        return 'NO';
    }else if (x2 > x1 && v2 > v1){
        return 'NO';
    }else {
        let counterK1 = x1;
        let counterK2 = x2;
        for(let i=0; i<100; i++){
            counterK1 += v1;
            counterK2 += v2;
            if(counterK1 === counterK2){
                return 'YES';
            }
        }
        if(counterK1 !== counterK2){
            return 'NO';
        }
    }

}

let main = (strIn) => {

    let x1v1x2v2 = strIn.split(' ');

    const x1 =  parseInt(x1v1x2v2[0], 10);
    const v1 =  parseInt(x1v1x2v2[1], 10);
    const x2 =  parseInt(x1v1x2v2[2], 10);
    const v2 =  parseInt(x1v1x2v2[3], 10);

    let result = kangaroo(x1,v1,x2,v2);
    console.log(result+'\n');

}
let inStr = '0 3 4 2';
main(inStr);