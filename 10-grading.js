

let gradingStudents = (grades) => {
    let arrOut = [];
    for(let i=0; i<grades.length; i++){

        
        let initialGrade = 0;
        let nearestMultiple = 0;
        let gradesDiff = 0;
        let gradesResult = 0;
        initialGrade = grades[i];


        if (initialGrade < 40) {
            
            let acum = initialGrade;
            for (let j = 1; j <=10; j++) {
                
                if (acum % 5 === 0) {
                    nearestMultiple = acum;
                    gradesDiff = nearestMultiple - initialGrade;
                    
                    if(gradesDiff < 3 && nearestMultiple >= 40) {
                        gradesResult = nearestMultiple
                        break;
                    }else if(gradesDiff >= 3 || nearestMultiple < 40){
                        gradesResult = initialGrade;
                        break;
                    }
                }else{
                    acum += 1;
                };
                
            }
            

        }else{
            
            let acum = initialGrade;
            for (let j = 1; j <=10; j++) {
                
                if (acum % 5 === 0) {
                    nearestMultiple = acum;
                    gradesDiff = nearestMultiple - initialGrade;
                    
                    if(gradesDiff < 3) {
                        gradesResult = nearestMultiple
                        break;
                    }else if(gradesDiff >= 3){
                        gradesResult = initialGrade;
                        break;
                    }
                }else{
                    acum += 1;
                };
                
            }
            
        };
        arrOut.push(gradesResult);
    }
    console.log(arrOut);
}

let arr = [73, 67, 38, 33];
gradingStudents(arr);