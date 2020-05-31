// 1

var array = [1, 2, 3, 4, 5];
var arrayCopy = array.concat();

//2

var object = {
  fruit: 'pear',
  vegetable: 'tomato'
};
var objectCopy = {};

for (var prop in object) {
  objectCopy[prop] = object[prop];
}

// 3
function printSquareRoot(num, func) {
  func(num);
}
function funcFromArgument(arg) {
  console.log(Math.sqrt(arg));
}
printSquareRoot(25, funcFromArgument);

//4

function outer() {
  var array2 = [];

   function inner (arg) {
     var lengthOfArray = array2.length;

     lengthOfArray === 5 ? lengthOfArray = 0 : array2.push(arg);

     console.log(array2);
  }

  return inner;
}

var newInner = outer();
newInner(1);
newInner(2);
newInner(3);
newInner(4);
newInner(5);
newInner(6);

//5

var button = document.querySelector('button');

button.addEventListener('click', (function () {
  var counter = 0;

  return function() {
    counter++;
    button.innerText = counter;
  }
})());






















