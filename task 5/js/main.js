var body = document.body;
var form = document.querySelector('.f-default');
var button = document.querySelector('.f-default__btn');

form.addEventListener('submit', function (e) {
e.preventDefault();

var email = e.target.elements.email.value;
var password = e.target.elements.password.value;

if (!email || !password ) {
    alert('заполните пустые поля');
} else if (password || password.length < 10) {
    alert('пароль должен содержать более 10 символов');
};

console.log('форма отправлена');
});

body.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
console.log('BODY_1');
});

body.addEventListener('click', function () {
    console.log('BODY_2');
});

body.addEventListener('click', function () {
    console.log('BODY_3');
});

button.addEventListener('click', function (e) {
    e.stopPropagation();
});

