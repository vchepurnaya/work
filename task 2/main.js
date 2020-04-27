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