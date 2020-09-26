
//my way of doing this

function getDayName(dateString) {
    let dayName;
    // Write your code here
    
    dayName = new Date(dateString).getDay()

    switch(dayName) {
        case 0:
            dayName = 'Sunday'
            break
        case 1:
            dayName = 'Monday'
            break
        case 2:
            dayName = 'Tuesday'
            break
        case 3:
            dayName = 'Wednesday'
            break
        case 4:
            dayName = 'Thursday'
            break
        case 5:
            dayName = 'Friday'
            break
        case 6:
            dayName = 'Saturday'
            break
    }
    return dayName;
}

//internet way, hehe
function getDayName1(dateString) {
    const date = new Date(dateString);

    const options = {
      weekday: 'long'
    };
  
    return new Intl.DateTimeFormat('en-Us', options).format(date);
}

let main = (strIn) => {

    let splitted = strIn.split('\n');
    let iterations = Number(splitted[0]);
    for (let i = 1; i <= iterations; i++) {
        
        console.log(getDayName(splitted[i]));
        console.log(getDayName1(splitted[i]));

        
    }

}

const strIn = `2
10/11/2009
11/10/2010`
main(strIn);