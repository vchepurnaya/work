var oddOrEven = document.querySelector('.l-tasks__item-text');
var elBody = document.body;
var btnToggle = document.querySelector('._toggle');
var arrOfSpans = document.querySelectorAll('.l-tasks__span');
var btnRemove = document.querySelector('._remove');
var clickToggleHandler = function() {
  elBody.classList.toggle('_color-scheme-light');
};
var removeSpanHandler = function() {
  if (elBody.classList.contains('_color-scheme-vivid')) {
    arrOfSpans[arrOfSpans.length - 1].remove();
  } else {
    arrOfSpans[0].remove();
  }

  btnRemove.removeEventListener('click', removeSpanHandler);
};

btnToggle.addEventListener('click', clickToggleHandler);
btnRemove.addEventListener('click', removeSpanHandler);

;(function(num) {
    if (typeof num === 'number' && num % 2 === 0){
        oddOrEven.innerHTML = 'Number ' + num + ' is even'
        }
        else if (typeof num === 'number' && num % 2 !== 0)  {
            oddOrEven.innerHTML = 'Number ' + num + ' is odd'
        }
        else {
        oddOrEven.innerHTML = 'This is not a number'
    }
}(5));