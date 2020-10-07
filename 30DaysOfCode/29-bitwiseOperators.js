

let getMaxLessThanK = (n,k) => {
    let max_value = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i+1; j < n+1; j++) {
            
            if (Number(i & j) < k) {
                if (Number(i & j) > max_value) {
                    max_value = i & j;
                }
            }
            
        }
        
    }
    return max_value;
}

let main = (strIn) =>{

    const splitted = strIn.split('\n');
    const numsItems = splitted[0];
    
    for(let i=1; i<=numsItems; i++){

        const [n,k] = splitted[i].split(' ').map(x => Number(x));
        console.log(getMaxLessThanK(n,k));
    }

}
const strIn = `3
5 2
8 5
2 2`
main(strIn)