function Persons(initialAge){

    if(initialAge < 0){
        this.age = 0;
        console.log(`Age is not valid, setting age to 0`);
    }else {
        this.age = initialAge;
    };

    // Add some more code to run some checks on initialAge
    this.amIOld = function(){
    // Do some computations in here and print out the correct statement to the console
            if(this.age < 13){
                return `You are young.`;
            }else if(this.age >=13 && this.age < 18){
                return `You are a teenager.`;
            }else {
                return `You are old.`;
            }
    };
    this.yearPasses = function(){
            // Increment the age of the person in here
            this.age +=1;
    };
};

let person1 = new Persons(18);
console.log(person1.amIOld());
person1.yearPasses();
person1.yearPasses();
person1.yearPasses();
console.log(person1.amIOld());
