function processData(input) {
    //Enter your code here
    let fine = 0;
    let dataSplitted = input.split('\n');
    let returnedDate = dataSplitted[0].split(' ');
    let expectedDate = dataSplitted[1].split(' ');
    let [dayA,monthA,yearA] = returnedDate;
    let [dayE,monthE,yearE] = expectedDate;
    // let [yearA,dayA,monthA] = new Date(dataSplitted[0]).toLocaleDateString().split('-');
    // let [yearE,dayE,monthE] = new Date(dataSplitted[1]).toLocaleDateString().split('-');
    // let date1 = new Date(dataSplitted[0]);
    // let date2 = new Date(dataSplitted[1]);
    // console.log(`1: ${returnedDate}, 2: ${expectedDate}`);

    // console.log(`day: ${dayA}, month: ${monthA}, year: ${yearA}`);
    // console.log(`day: ${dayE}, month: ${monthE}, year: ${yearE}`);

    if((yearA - yearE) === 0){
        if((monthA - monthE) > 0){
            fine = 500 * (monthA-monthE)
            console.log(fine);
        }else {
            if ((dayA - dayE) > 0) {
                fine = 15 * (dayA - dayE);
                console.log(fine);
            }else {
                fine = 0;
                console.log(fine);
            }
        }
    }else if((yearA - yearE) > 100){
        fine = 0;
        console.log(fine);
    }else if((yearA + yearE) < 100){
        fine = 0;
        console.log(fine);
    }else if(monthA == 12 && dayA == 31){
        fine = 0;
        console.log(fine);
    }else if(monthA == 1 && dayA == 1){
        fine = 10000;
        console.log(fine);
    }else if((yearA + yearE) > 3000){
        fine = 0;
        console.log(fine);
    }else {
        fine = 10000;
        console.log(fine);
    }


} 
const strIn = `1 1 2010
31 12 2009`
processData(strIn);