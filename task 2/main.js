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
var newArray = [];
for (var i=0; i<array.length; i++) {

  if (newArray.indexOf(array[i]) ) {
    newArray.push(array[i]);
  }
  else if (newArray.indexOf(array[i]) === array[i].indexOf(newArray[i])) {
    delete array[i];
  }

}
console.log('Результат вывода 4 задания: ' + newArray);

// 5)
var array2 = ['apple', 8, 14, 5, 'orange', 20, 'grape', 1, 'orange'];
console.log('Результат вывода 5 задания: ');
for (var i=0; i<array2.length; i++){
  if (array2[i] > 7) {
    console.log(i + ' - ' + array2[i]);
  }
}

// 6)
var array3 = ['red', 'green', 'orange', 'purple', 1, 2, 14];
console.log('Результат вывода 6 задания: ');
for (var i=0; i<array3.length; i++){
  if (array3[i].length > 5) {
    console.log(i + ' - ' + array3[i]);
  }
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
var newArrayOfObjects2 = [];
for (var i=0; i<arrayOfObjects2.length; i++) {
  newArrayOfObjects2.push(arrayOfObjects2[i]);
  newArrayOfObjects2[i].titleUpperCased = newArrayOfObjects2[i].title.toUpperCase();
}
console.log(newArrayOfObjects2);

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
console.log('Результат вывода 12 задания: ');

function calcSqrtOfNum(a) {

  return  a**2;
}

function putResIntoArr(calcSqrtOfNum) {
  var arr = [];
  var sqrtNum = calcSqrtOfNum(5);
  arr.push(sqrtNum);

  return arr;
}
console.log(putResIntoArr(calcSqrtOfNum));
