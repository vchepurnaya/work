var array = ['apple', 'orange', 'grape', 'orange'];
array.unshift('pineapple'); //1
array.push('banana'); //2
delete array [0]; //3
array.splice(4,1);

/*for (var i=0; i<array.length; i++) {
  var newArray = [];
  if (array[i]===array[i]) {
    delete array[i];
  }
}*/
console.log(array);