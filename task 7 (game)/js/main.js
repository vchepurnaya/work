var graveyard = document.querySelector('.b-shooter');
var shooter = document.querySelector('.b-shooter__aim');
var imgOfShooter = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');

graveyard.addEventListener('click', function (e) {
  var x = e.offsetX - shooter.offsetWidth / 2;
  var y = e.offsetY - shooter.offsetHeight / 2;
  var limitX = e.currentTarget.offsetWidth - shooter.offsetWidth;
  var limitY = e.currentTarget.offsetHeight - shooter.offsetHeight;

  if (x < 0) {
    x = 0;
  } else if (x > limitX) {
      x = limitX;
  }
  if (y < 0) {
    y = 0;
  } else if (y > limitY) {
      y = limitY;
  }

  shooter.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    imgOfShooter.style.transform = 'scale(0.9,0.9)';
  }
});

document.addEventListener('keyup', function (e) {
  var rect = shooter.getBoundingClientRect();
  var aimCenterX = rect.x;
  var aimCenterY = rect.y;

  if (e.code === 'Enter') {
    imgOfShooter.style.transform = 'scale(1,1)';
  }

  console.log(aimCenterX, aimCenterY);
});

function setRandomCoords() {
  var x = Math.floor(Math.random() * (graveyard.offsetWidth - ghost.offsetWidth));
  var y = Math.floor(Math.random() * (graveyard.offsetHeight - ghost.offsetHeight));
  var limitX = graveyard.offsetWidth - ghost.offsetWidth;
  var limitY = graveyard.offsetHeight - shooter.offsetHeight;

  if (x < 0) {
    x = 0;
  } else if (x > limitX) {
    x = limitX;
  }
  if (y < 0) {
    y = 0;
  } else if (y > limitY) {
    y = limitY;
  }

  ghost.style.left =  x + 'px';
  ghost.style.top =  y + 'px';
};

setInterval(function () {
if (ghost.style.display === 'none') {
  ghost.removeAttribute('style');
} else if (ghost.style.display === '') {
  ghost.setAttribute('style', 'display: none;');
}
setRandomCoords();
}, 3000);