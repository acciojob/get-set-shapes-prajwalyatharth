class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width, width); // Call Rectangle constructor with equal width and height
    }

    // Method to calculate the perimeter
    getPerimeter() {
        return 4 * this.width;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
