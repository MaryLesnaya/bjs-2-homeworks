//Задача 1
function parseCount(count) {
    let newCount = Number.parseFloat(count);
    if(Number.isNaN(newCount)) {
      throw new Error("Невалидное значение");
    }
    return newCount;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch(error) {
      return error;
    }
  }

  
  //Задача 2
  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = cancelIdleCallback;
    }
  
    if((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    /*breakRule() {
      if(this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }*/
  
    get perimeter() {
      return this.a + this.b + this.c;
    } 
  
    get area() {
      let semiPerimeter = 0.5 * (this.a + this.b + this.c);
      let areaOfTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
      return Number(areaOfTriangle.toFixed(3))
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch(error) {
      let triangleError = {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
      }
  
      return triangleError;
    }
  }