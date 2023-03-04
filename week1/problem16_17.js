class Shape{
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        console.log(`The perimeter of ${this.name} is ${this.sides * this.sideLength}.`);
    }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength);
    }
    calcArea() {
        const area = this.sideLength ** 2;
         console.log(`The area of ${this.name} is ${area}.`);
    }
}

const square2 = new Square(5);
square2.calcPerimeter();
square2.calcArea();
