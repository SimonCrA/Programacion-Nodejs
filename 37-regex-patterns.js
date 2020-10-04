

let main = (strIn) => {
    let dataSplitted = strIn.split('\n');
    let DB = [];
    for (let i = 1; i < dataSplitted.length; i++) {
        let data = dataSplitted[i].split(' ');
        const firstName = data[0];
        const emailID = data[1];

        const regex = new RegExp("[a-z]+@gmail\\.com$");
        if (emailID.match(regex)) {
            DB.push(firstName);
        }
        
    }
    DB.sort();
    for(const names of DB){
        console.log(names);
    }
}

const strIn = `6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com`;

main(strIn);