//one way to create object using factories
function createCircle(radius)
{
   return {
      radius: radius,
      draw: function(){
         return this.radius;
      }
   }
}

const circle = createCircle(5);
console.log(circle.draw());

//using constructor way to create object
class Circle {
   constructor(radius) {
      this.radius = radius;
      this.draw = function () {
         console.log(this.radius);
      };
   }
}

const another = new Circle(1);
console.log(another.draw());