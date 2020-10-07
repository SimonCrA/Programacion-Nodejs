

let main = (strIn) => {
    let dataSplitted = strIn.split('\n');
    for (let i = 1; i < dataSplitted.length; i++) {
        const nk = dataSplitted[i].split(' ');

        const n = parseInt(nk[0], 10);
        const k = parseInt(nk[1], 10);

        if ((k-1 | k) <= n) {
            console.log(k-1)
        }else {
            console.log(k-2);
        }
        
    }
}
const strIn = `3
5 2
8 5
2 2`
main(strIn);