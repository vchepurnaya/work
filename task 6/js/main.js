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
var check = false;

button.addEventListener('click', function () {
  if (!check) {
    for (var prop in obj) {

      var field = obj[prop];

      if (Array.isArray(field)) {
        color = field;
      }
    }
    check = true;
  }

body.style.backgroundColor =
    (color[Math.floor(Math.random() * (color.length))]);
  
});

