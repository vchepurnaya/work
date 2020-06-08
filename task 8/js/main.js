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

     if(array2.length >= 5){
       array2 = [];
       array2.push(arg);
     }
     else{
       array2.push(arg);
     }

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
newInner(7);
newInner(8);
newInner(9);


//5

var button = document.querySelector('button');

button.addEventListener('click', name());

function name() {
  var counter = 0;


  return function(e) {
    counter++;
    e.currentTarget.innerText = counter;
  }
}