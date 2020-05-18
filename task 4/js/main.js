var galaxy = document.querySelector('.b-universe');
var earth = document.querySelector('.b-universe__img');

galaxy.addEventListener('click', function (e) {
var x = e.offsetX - (earth.offsetWidth / 2);
var y = e.offsetY - (earth.offsetHeight / 2);

if (x < 0) {
 x = 0;
} else if (e.offsetX + (earth.offsetWidth/2) > galaxy.offsetWidth) {
  x = galaxy.offsetWidth - earth.offsetWidth;
}
  if (y < 0) {
    y = 0;
  } else if (e.offsetY + (earth.offsetHeight/2) > galaxy.offsetHeight) {
    y = galaxy.offsetHeight - earth.offsetHeight;
  }

  earth.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

 if (e.target.tagName === 'IMG') {
   earth.style.display = 'none';
 } else if (earth.style.display === 'none') {
   earth.style.display = '';
  }
});