var graveyard = document.querySelector('.b-shooter');
var shooter = document.querySelector('.b-shooter__aim');
var imgOfShooter = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var fire = document.querySelector('.b-shooter__img-fire');
var intervalIdGhost = setInterval(setIntervalForGhost,3000);

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
  var rectGhost = ghost.getBoundingClientRect();
  var aimCenterX = shooter.getBoundingClientRect().x + shooter.getBoundingClientRect().width / 2;
  var aimCenterY = shooter.getBoundingClientRect().y + shooter.getBoundingClientRect().height / 2;
  var delayToReset = 500;

  if (e.code === 'Enter') {
    imgOfShooter.style.transform = 'scale(1,1)';

    if (aimCenterY >= rectGhost.top + 20 &&
        aimCenterY <= rectGhost.bottom - 20 &&
        aimCenterX >= rectGhost.left + 20 && 
        aimCenterX <= rectGhost.right - 20) {

      setAnimation();
      clearInterval(intervalIdGhost);
      setTimeout(resetAnimation, delayToReset);
    }

    console.log(aimCenterY, aimCenterX);
  }
});

function setAnimation() {
  fire.classList.toggle('animation');
  ghost.classList.toggle('animation');
  imgOfShooter.style.display = 'none';
};

function resetAnimation() {
  fire.classList.toggle('animation');
  ghost.classList.toggle('animation');
  imgOfShooter.style.display = '';
};

function setRandomCoords() {
  var x = Math.floor(Math.random() * (graveyard.offsetWidth - ghost.offsetWidth));
  var y = Math.floor(Math.random() * (graveyard.offsetHeight - ghost.offsetHeight));
  var limitX = graveyard.offsetWidth - ghost.offsetWidth;
  var limitY = graveyard.offsetHeight - shooter.offsetHeight;

  ghost.style.left =  x + 'px';
  ghost.style.top =  y + 'px';
};

function setIntervalForGhost() {
  if (ghost.style.display === 'none') {
    ghost.removeAttribute('style');
  } else if (ghost.style.display === '') {
    ghost.setAttribute('style', 'display: none;');
  }
  setRandomCoords();
};