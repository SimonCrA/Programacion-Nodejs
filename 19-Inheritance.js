class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName,lastName,id,scores) {
        super(firstName,lastName,id);
        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
    calculate() {
        let sumGrades = 0;
        let avgGrades = 0;
        for(let i=0; i<this.scores.length; i++){
            sumGrades += this.scores[i];
        }
        avgGrades = sumGrades/ this.scores.length;
    
        if(avgGrades >= 90 && avgGrades <= 100){
            return 'O'
        }else if(avgGrades >= 80 && avgGrades < 90){
            return 'E'
        }else if(avgGrades >= 70 && avgGrades < 80){
            return 'A'
        }else if(avgGrades >= 55 && avgGrades < 70){
            return 'P'
        }else if(avgGrades >= 40 && avgGrades < 55){
            return 'D'
        }else if(avgGrades < 40){
            return 'T'
        }
        
    }
}
