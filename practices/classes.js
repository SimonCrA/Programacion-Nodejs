/*
Classes are a template for creating objects. 
They encapsulate data with code to work on that data

Classes are in fact "special functions", and just as 
you can define function expression and function devlarations
the class syntax has two components, class expressions, and class declarations
 */

 //Class Declaration

 class Rectangle {
     constructor(height, width) {
         this.height = height;
         this.width = width;
     }
 }

 //Class Expression

 let rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
 };
 console.log(Rectangle.name); //output: "Rectangle"

 let Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
 };
 console.log(Rectangle.name); //output: "Rectangle2"

//cuerpo de una clase y definicion de métodos

//prototype Methods

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
}
  
const square = new Rectangle(10, 10);

console.log(square.area); // 100

//Static Methods
/*
Static methods are called without instantiating 
their class and cannot be called through a class instance.
Static methods are often used to create utility
functions for an application.
*/

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(a,b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

p1.distance; //undefined
p2.distance; //undefined
console.log(Point.distance(p1,p2)); //7.0710678118654755

//sub classing with extends
/*
The extends keyword is used in class declarations or 
class expressions to create a class as a child of another class
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
};

class Dog extends Animal {
    constructor(name) { //if there's a contructor present in the sublass, it needs to first call super() before using this.
        super(name); //call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
};

let dog = new Dog('Mitzie');
dog.speak()//output:Mitzie barks.

//inheritance practice
class Rectangle {
    constructor(w,h){
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = () => {
    return this.w*this.h;
}


class Square extends Rectangle {
    constructor(l){
        super(l);
        this.w = l;
        this.h = l;
    }
}