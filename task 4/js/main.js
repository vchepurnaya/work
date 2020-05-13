var galaxy = document.querySelector('.b-universe');
var earth = document.querySelector('.b-universe__img');

galaxy.addEventListener('click', function (e) {

earth.style.transform = 'translate(' + e.offsetX + 'px, ' +  e.offsetY + 'px)';

  if (earth === e.target ) {
    earth.style.display = 'none';
  } else {
    earth.style.display = '';
  }

});