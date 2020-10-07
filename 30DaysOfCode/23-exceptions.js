

function main(strIn) {
    const S = strIn;

    try {
        let num = Number(S);
        
        S != num && err();
        console.log(S);
    } catch (err) {
        console.log('Bad String');
    }
}
let instr = '4'
main(instr);