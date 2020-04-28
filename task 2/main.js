var array = ['apple','orange','orange','grape'];

// 1)
array.unshift('pineapple');
console.log('Результат вывода 1 задания: ' + array);

// 2)
array.push('banana');
console.log('Результат вывода 2 задания: ' + array);

// 3)
delete array [0];
array.splice(4,1);
console.log('Результат вывода 3 задания: ' + array);

// 4)
array.sort();
for (var i=0; i<array.length-1; i++) {

 if (array[i]===array[i+1]) {
   delete array[i];
  }
}
console.log('Результат вывода 4 задания: ' + array);

// 5)
var array2 = ['apple', 8, 14, 5, 'orange', 20, 'grape', 1, 'orange'];
var newArray2 = [];
for (var i=0; i<array2.length; i++){
  if (array2[i] > 7) {
    newArray2.push(array2[i]);
  }
}
console.log('Результат вывода 5 задания: ');

for (var i=0; i<newArray2.length; i++) {
  console.log(i + ' - ' + newArray2[i]);
}

// 6)
var array3 = ['red', 'green', 'orange', 'purple', 1, 2, 14];
var newArray3 = [];
for (var i=0; i<array3.length; i++){
  if (array3[i].length > 5) {
    newArray3.push(array3[i]);
  }
}
console.log('Результат вывода 6 задания: ');

for (var i=0; i<newArray3.length; i++) {
  console.log(i + ' - ' + newArray3[i]);
}

// 7)
var array4 = ['red', true, false, 'green', null, 'orange', 'purple', 1, undefined, 2, 14];

console.log('Результат вывода 7 задания: ');

for (var i = 0; i < array4.length; i++) {

  if (typeof array4[i]==="number") {
    console.log('This is a number');
  }

  else if (typeof array4[i]==="string") {
    console.log('This is a string');
  }

  else {
    console.log('This is some type');
  }
}

// 8)
var arrayOfObjects = [
  { id: 1, message: 'hello', isHidden: true },
  { id: 2, message: 'bye', isHidden: false },
  { id: 3, message: 'thank you', isHidden: true },
  { id: 4, message: 'good day', isHidden: false },
  { id: 5, message: 'great', isHidden: true }
];
console.log('Результат вывода 8 задания: ');
for (var i=0; i<arrayOfObjects.length; i++) {

  if (arrayOfObjects[i].isHidden !== true) {
    console.log(arrayOfObjects[i].message);
  }
}

// 9)
var arrayOfObjects2 = [
  { title: 'artist'},
  { title: 'writer'},
  { title: 'waiter'},
  { title: 'actor'}
];

console.log('Результат вывода 9 задания: ');

for (var i=0; i<arrayOfObjects2.length; i++) {
  arrayOfObjects2[i].titleU = arrayOfObjects2[i].title.toUpperCase();
}

console.log(arrayOfObjects2);

// 10)
var array5 = ['veg','products','meat','fruits','dairy'];
var newArray5 = [];
for (var i=0; i<array5.length; i++) {
  if (array5[i].indexOf('u') > -1) {
    newArray5.push(array5[i]);
  }
}
console.log('Результат вывода 10 задания: ' + newArray5);

// 11)
var array6 = [1,10,15,20,38,41,45];
console.log('Результат вывода 11 задания: ');
for (var i=0; i<array6.length; i++) {
  if (array6[i]%2===0){
    console.log(array6[i] + ' - ' + 'even');
  }
  else {
    console.log(array6[i] + ' - ' + 'add');
  }
}

// 12)
/*function calcSqrtOfNum(a) {

  return  a**2;
}

function myFunc(func) {
  var arr = [];
  var sum = arr + func();

  return sum;
}
var sum = myFunc(calcSqrtOfNum);
console.log(sum);*/




