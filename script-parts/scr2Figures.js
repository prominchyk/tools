//rectangle
let inputWidth = document.querySelector('#width');
let inputHeight = document.querySelector('#height');
let resPerim = document.querySelector('#resPerim');
let resSquare = document.querySelector('#resSquare');
let buttonPerim = document.querySelector('#buttonPerim');
let buttonSquare = document.querySelector('#buttonSquare');

class Rectangle {
  getPerim() {
    let width = Number(inputWidth.value);
    let height = Number(inputHeight.value);
    resPerim.textContent = (width * 2 + height * 2).toFixed(3) + ' см';
    resPerim.title = '';
    error(resPerim);
    errorEmptyValue(width, resPerim);
    errorEmptyValue(height, resPerim);
  }
  getSquare() {
      let width = Number(inputWidth.value);
      let height = Number(inputHeight.value);
      resSquare.textContent = (width * height).toFixed(3) + ' см²';
      resSquare.title = '';
      error(resSquare);
      errorEmptyValue(width, resSquare);
      errorEmptyValue(height, resSquare);
    }
}
let rectangle = new Rectangle;
buttonPerim.addEventListener('click', rectangle.getPerim);
buttonSquare.addEventListener('click', rectangle.getSquare);

//square
let inputSquare = document.querySelector('#widthSquare');
let resPerimSquare = document.querySelector('#resPerimSquare');
let resSquareSquare = document.querySelector('#resSquareSquare');
let buttonPerimSquare = document.querySelector('#buttonPerimSquare');
let buttonSquareSquare = document.querySelector('#buttonSquareSquare');

class Square {
  getPerim() {
    let width = Number(inputSquare.value);
    resPerimSquare.textContent = (width * 4).toFixed(3) + ' см';
    resPerimSquare.title = '';
    error(resPerimSquare);
    errorEmptyValue(width, resPerimSquare);
  }
  getSquare() {
    let width = Number(inputSquare.value);
    resSquareSquare.textContent = (width ** 2).toFixed(3) + ' см²';
    resSquareSquare.title = '';
    error(resSquareSquare);
    errorEmptyValue(width, resSquareSquare);
  }
}
let square = new Square;
buttonPerimSquare.addEventListener('click', square.getPerim);
buttonSquareSquare.addEventListener('click', square.getSquare);

//circle
let inputCircle = document.querySelector('#radiusCircle');
let resLengthCircle = document.querySelector('#resLengthCircle');
let resSquareCircle = document.querySelector('#resSquareCircle');
let buttonLengthCircle = document.querySelector('#buttonLengthCircle');
let buttonSquareCircle = document.querySelector('#buttonSquareCircle');

class Circle {
  getLength() {
    let radius = Number(inputCircle.value);
    resLengthCircle.textContent = (2 * 3.14 * radius).toFixed(3) + ' см';
    resLengthCircle.title = '';
    error(resLengthCircle);
    errorEmptyValue(radius, resLengthCircle);
  }
  getSquare() {
    let radius = Number(inputCircle.value);
    resSquareCircle.textContent = (3.14 * radius ** 2).toFixed(3) + ' см²';
    resSquareCircle.title = '';
    error(resSquareCircle);
    errorEmptyValue(radius, resSquareCircle);
  }
}
let circle = new Circle;
buttonLengthCircle.addEventListener('click', circle.getLength);
buttonSquareCircle.addEventListener('click', circle.getSquare);

//triangle
let input1Triangle = document.querySelector('#width1Tr');
let input2Triangle = document.querySelector('#width2Tr');
let input3Triangle = document.querySelector('#width3Tr');
let resSquareTriangle = document.querySelector('#resSquareTriangle');
let buttonSquareTriangle = document.querySelector('#buttonSquareTriangle');

class Triangle {
  getSquare() {
    let width1 = Number(input1Triangle.value);
    let width2 = Number(input2Triangle.value);
    let width3 = Number(input3Triangle.value);
    let p = (width1 + width2 + width3) / 2;
    let s = Math.sqrt(p * (p - width1) * (p - width2) * (p - width3));
    resSquareTriangle.textContent = s.toFixed(3) + ' см²';
    resSquareTriangle.title = '';
    error(resSquareTriangle);
    errorEmptyValue(width1, resSquareTriangle);
    errorEmptyValue(width2, resSquareTriangle);
    errorEmptyValue(width3, resSquareTriangle);
  }
}
let triangle = new Triangle;
buttonSquareTriangle.addEventListener('click', triangle.getSquare);