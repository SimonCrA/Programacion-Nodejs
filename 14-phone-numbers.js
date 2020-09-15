

let processData = (input) => {

    let dataSplitted = input.split('\n');
    let contactSplitted = [];
    let objContact = new Object();
    let numberOfContacts = Number(dataSplitted[0]);
    
    for(let i=1; i<=numberOfContacts; i++){
        
        contactSplitted = dataSplitted[i].split(' ');
        let nameVar = contactSplitted[0];
        objContact[nameVar] = contactSplitted[1];
        
    }

    for (let i = numberOfContacts+1; i < dataSplitted.length; i++) {
        let outPut = '';
        const newPerson = dataSplitted[i];

        if (objContact.hasOwnProperty(newPerson)) {
            outPut += `${newPerson}=${objContact[newPerson]}`;
        }else {
            outPut += `Not found`;
        }
        console.log(outPut);  
    };
    
};

let inputStr = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

processData(inputStr);