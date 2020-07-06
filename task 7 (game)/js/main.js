var graveyard = document.querySelector('.b-shooter');
var shooter = document.querySelector('.b-shooter__aim');
var imgOfShooter = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var fire = document.querySelector('.b-shooter__img-fire');
var progress = document.querySelectorAll('.b-shooter__progress-icon');
var health = document.querySelectorAll('.b-shooter__health-icon');

var delayToReset = 500;
var markProgress = markProgressOut();
var markLifeStatus = markLifeStatusOut();
var isGameOver = false;

graveyard.addEventListener('click', function (e) {
  var x = e.offsetX - shooter.offsetWidth / 2;
  var y = e.offsetY - shooter.offsetHeight / 2;
  var limitX = e.currentTarget.offsetWidth - shooter.offsetWidth;
  var limitY = e.currentTarget.offsetHeight - shooter.offsetHeight;

  if (isGameOver !== true) {
    if (ghost.style.animationPlayState !== 'paused') {
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
    }
  }
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

  if (e.code === 'Enter') {
    imgOfShooter.style.transform = 'scale(1,1)';

    if (aimCenterY >= rectGhost.top + 20 &&
        aimCenterY <= rectGhost.bottom - 20 &&
        aimCenterX >= rectGhost.left + 20 && 
        aimCenterX <= rectGhost.right - 20) {

      setAnimation();
      setTimeout(resetAnimation, delayToReset);
      markProgress();
    }

    console.log(aimCenterY, aimCenterX);
  }
});

function setAnimation() {
  fire.style.cssText = 'visibility: visible; opacity: 0;'
  fire.style.transitionProperty = delayToReset * .4 + 'ms';
  fire.style.transitionDuration = delayToReset * .6 + 'ms';

  ghost.style.opacity = '0';
  ghost.style.transitionProperty = delayToReset * .4 + 'ms';
  ghost.style.transitionDuration = delayToReset * .6 + 'ms';
  ghost.style.animationPlayState = 'paused';

  imgOfShooter.style.display = 'none';
};

function resetAnimation() {
  fire.removeAttribute('style');

  ghost.removeAttribute('style');
  ghost.setAttribute('style', 'display: none;');
  ghost.style.animationPlayState = 'running';

  imgOfShooter.style.display = '';
};

function setRandomCoords() {
  var x = Math.floor(Math.random() * (graveyard.offsetWidth - ghost.offsetWidth));
  var y = Math.floor(Math.random() * (graveyard.offsetHeight - ghost.offsetHeight));

  ghost.style.left =  x + 'px';
  ghost.style.top =  y + 'px';
};

function setIntervalForGhost() {
  if (ghost.style.animationPlayState !== 'paused') {
    if (ghost.style.display === 'none') {
      ghost.removeAttribute('style');
    }
    setRandomCoords();
  }
};

setInterval(setIntervalForGhost,3000);

function markProgressOut() {
  var i = 0;

  function markProgress() {
    if (ghost.style.animationPlayState === 'paused') { //исправить баг!!!!!!!!!!!
      progress[i].classList.add('progress');
      i++;
      if (i === progress.length) {
        isGameOver = true;
      }
    }
  }
   return markProgress;
}

function markLifeStatusOut() {
  var i = 0;

  function markLifeStatus() {
      health[i].classList.add('health');
      i++;
  }
  return markLifeStatus;
}