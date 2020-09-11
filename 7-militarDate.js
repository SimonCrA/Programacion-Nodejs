function timeConversion(s) {
    let hoursArr = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00'];
    let momentOfTheDay = s.charAt(8);
    let dateSplitted = '';
    if(momentOfTheDay === 'A'){
        dateSplitted = s.split('A',1);
        return String(dateSplitted);
    }else if(momentOfTheDay === 'P') {
        dateSplitted = s.split('P',1);
        let fragmentedDate = String(dateSplitted).split(':',3);
        console.log(fragmentedDate);

        let hoursIn = fragmentedDate[0];
        let mins = fragmentedDate[1];
        let secs = fragmentedDate[2];
        let hoursOut = '';
        
        for (let i = 0; i < hoursArr.length; i++) {
            
            if(Number(hoursIn) === i) {

                hoursOut = hoursArr[i];

            }

        };
        return `${hoursOut}:${mins}:${secs}`;
    }
    
}
let date = '07:05:45PM'
console.log(timeConversion(date));