var arrayOfObjects = [
  { name: 'sportsmen', minutes: 100, distance: 10 },
  { name: 'car', minutes: 70, distance: 100 },
  { name: 'plane', minutes: 60, distance: 300 }
];

function calculateVelocity(minutes, distance) {
  var tHours = minutes / 60;

  return distance / tHours;
 }

var maxV = 0;

for (var i = 0; i < arrayOfObjects.length; i++) {
  var km = arrayOfObjects[i].distance;
  var min = arrayOfObjects[i].minutes;

  var currentV = calculateVelocity(min, km);

  if (maxV < currentV) {
    maxV = currentV;
    }
  }
console.log('Максимальная скорость равна: ' + maxV);