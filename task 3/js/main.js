var oddOrEven = document.querySelector('.l-tasks_item-text');
var elBody = document.body;
var btnToggle = document.querySelector('._toggle');
var arrOfSpans = document.querySelectorAll('.l-tasks_span');
var btnRemove = document.querySelector('._remove');

;(function(num) {
   if (typeof num === 'number' ){
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

var clickToggleHandler = function() {
  elBody.classList.toggle('_color-scheme-light');
};

btnToggle.addEventListener('click', clickToggleHandler);

var removeSpanHandler = function() {
  var lastSpan = document.querySelectorAll('.l-tasks_span')[arrOfSpans.length-1];
  var firstSpan = document.querySelectorAll('.l-tasks_span')[0];
  var counter = 0;

    if (elBody.classList.contains('_color-scheme-vivid')) {
      lastSpan.remove();
    }
    else {
      firstSpan.remove();
      if (counter > 1){
      }
      btnRemove.removeEventListener('click', removeSpanHandler);
    }
};

btnRemove.addEventListener('click', removeSpanHandler);