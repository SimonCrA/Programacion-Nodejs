//ejemplo inicial funcion normal.

// function createNewPerson(name) {

//     let obj= {};
//     obj.name = name;
//     obj.greeting = function() {
//         return `Hi i'm ${this.name}.`;
//     }
//     return obj;
// };

//ejemplo con añadiendo el constructor

// function Person(name) {
//     this.name =name;
//     this.greeting = function() {
//         return `Hi i'm ${this.name}.`
//     }
// }

// let person1 = new Person('Bob');
// let person2 = new Person('Sarah');

// console.log(person1.name);
// console.log(person1.greeting());
// console.log(person2.name);
// console.log(person2.greeting());

//Creación del constructor final para el objeto persona.

function Person(first, last, age, gender, interests) {

    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        return `${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
    };
    this.greetings = function() {
        return `Hi i'm ${this.name.first}.`;
    };

};

let person1 = new Person('Bob','Smith', 32, 'male', ['music', 'skiing']);

console.log(person1.bio());