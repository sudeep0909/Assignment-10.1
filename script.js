
// Javascript External File

/* 
JavaScript program to Write a class called Rectangle. 
A rectangle has length and breadth properties, given as arguments to its constructor.
It also has a single method calculateArea, which returns calculated area 
*/

// class Rectangle created.
class Rectangle {
    constructor(length, breadth) {
      this.length = length;
      this.breadth = breadth;
    }
    // calculateArea Getter
    get area() {
      return this.calculateArea();
    }
    // method calculateArea
    calculateArea() {
      return this.length * this.breadth;
    }
}
  
// boject RecArea created
const RecArea  = new Rectangle(10, 20);
  
console.log(`Rectangle with length of ${RecArea .length} and breadth of ${RecArea .breadth}, returns Area = ` + RecArea .area); // 100

