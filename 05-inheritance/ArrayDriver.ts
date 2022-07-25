import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 10);
let myCircle = new Circle(5, 10, 15);
let myRectangle = new Rectangle(10, 10, 10, 10);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes)
    console.log(shape.getInfo());