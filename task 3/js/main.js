// 1 section
var oddOrEven = document.querySelector('.l-tasks_item-text');

;(function(num) {
   if (typeof num === "number" ){
     if (num % 2 === 0) {
       oddOrEven.innerHTML = 'Number ' + num + ' is even'
     }
     else {
       oddOrEven.innerHTML = 'Number ' + num + ' is odd'
     }
   }
   else {
     oddOrEven.innerHTML = 'This is not a number'
   }
}(5));

// 3 section
var el_body = document.body;
var btn = document.querySelector('._toggle');

var clickHandler = function() {
  el_body.classList.toggle('_color-scheme-light');
  el_body.classList.toggle('_color-scheme-vivid');
};

btn.addEventListener('click', clickHandler);

// 2 section
var el_span = document.querySelectorAll('.l-tasks_span');
var button = document.querySelector('._remove');

var clickHandler1 = function() {

  var lastSpan = document.querySelectorAll('.l-tasks_span')[el_span.length-1];
  var firstSpan = document.querySelectorAll('.l-tasks_span')[0];
  var counter = 0;

    if (el_body.classList.contains('_color-scheme-vivid') === true) {
     lastSpan.remove();
    }
    else {
      firstSpan.remove();
      if (counter > 1){
      }
      button.removeEventListener('click', clickHandler1);
    }
};

button.addEventListener('click', clickHandler1);