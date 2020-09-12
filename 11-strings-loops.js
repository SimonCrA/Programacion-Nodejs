let processData = (input) => {

    let splitter = input.split('\n', input.length);
    console.log(splitter);

    for(let i= 1; i < splitter.length; i++) {
        let word = splitter[i];
        let numberOfChars = word.length;
        let even = '';
        let odd = '';
        let finalString = '';
        for (let j = 0; j < numberOfChars; j++) {
            
            if (j % 2 == 0) {
                // console.log(`even ${word.charAt(j)}`);
                even += `${word.charAt(j)}`;
            }else {
                // console.log(`odd ${word.charAt(j)}`);
                odd += `${word.charAt(j)}`;

            }

            
        };
        
        finalString = `${even}  ${odd}`;
        console.log(finalString);
        
    }

}

let inStr = '2' + "\n" + "Hacker" + "\n" + "Rank";

processData(inStr);