var body = document.body;
var button = document.querySelector('button');
var color = [];
var obj = {
  field_1: ['#00bcd4', ' #ffc107', '#2196f3'],
  field_2: 1,
  field_3: 'Welcome',
  field_4: 'Hello',
  field_5: 15
};
var index;

button.addEventListener('click', function () {
  if (!color.length) {
    for (var prop in obj) {
      var field = obj[prop];

      if (Array.isArray(field)) {
        color = field;
      }
    }
  }

index = Math.floor(Math.random() * (color.length));
body.style.backgroundColor = (color[index]);
});

document.addEventListener('keydown', function (e) {
if (!color.length) {
  alert('Достаньте массив цветов!');
} else {
    if (e.code === 'ArrowRight') {
    index >= color.length - 1 ? index = 0 : index++;

  } else if (e.code === 'ArrowLeft') {
    index === 0 ? index = color.length - 1 : index--;
  }
}
  body.style.backgroundColor = color[index];
});