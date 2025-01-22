//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	getArea(){
		return this.width * this.height;
	}
}

class Square extends Animal {
	constructor(width){
		super(width, height);
	}

	getPerimeter(){
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
