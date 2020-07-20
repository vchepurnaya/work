var graveyard = document.querySelector('.b-shooter');
var shooter = document.querySelector('.b-shooter__aim');
var imgOfShooter = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var fire = document.querySelector('.b-shooter__img-fire');
var progress = document.querySelectorAll('.b-shooter__progress-icon');
var health = document.querySelectorAll('.b-shooter__health-icon');
var lifeStatus = document.querySelector('.b-shooter__health');
var finalTitle = document.querySelector('.b-shooter__game-over-title');


var delayToReset = 500;
var isGameOver = false;
var isLastProgress;
var isOneTime;

var markProgress = markProgressOut();
var markLifeStatus = markLifeStatusOut();

graveyard.addEventListener('click', function (e) {
    if (isGameOver && ghost.style.animationPlayState === 'paused') {
        return
    }
    ;

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

document.body.addEventListener('keydown', function (e) {
    e.preventDefault();

    if (e.code === 'Space') {
        imgOfShooter.style.transform = 'scale(0.9)';
    }
});

document.body.addEventListener('keyup', function (e) {
    var rectGhost = ghost.getBoundingClientRect();
    var aimCenterX = shooter.getBoundingClientRect().x + shooter.getBoundingClientRect().width / 2;
    var aimCenterY = shooter.getBoundingClientRect().y + shooter.getBoundingClientRect().height / 2;

    e.preventDefault();

    if (e.code === 'Space') {
        imgOfShooter.style.transform = 'scale(1)';

        if (aimCenterY >= rectGhost.top + 20 &&
            aimCenterY <= rectGhost.bottom - 20 &&
            aimCenterX >= rectGhost.left + 20 &&
            aimCenterX <= rectGhost.right - 20 && !isGameOver) {

            setAnimation();
            setTimeout(resetAnimation, delayToReset);
            if (isOneTime) {
                markProgress.getNext();
            }
            isLastProgress = true;
        }

        console.log(aimCenterY, aimCenterX);
    }

    if (e.key === 'Enter' && isGameOver === true) {
        reset();
    }
});

function setAnimation() {
    var animation = `opacity: 0;
                   transition-delay: ${delayToReset * .4}ms;
                   transition-duration: ${delayToReset * .6}ms;`

    fire.style.cssText += animation + 'visibility: visible;';
    ghost.style.cssText += animation + 'animation-play-state: paused;';
    imgOfShooter.style.display = 'none';
}

function resetAnimation() {
    if (isGameOver === true) {
        dropTheCurtain(true)

    } else {
        fire.removeAttribute('style');

        ghost.removeAttribute('style');
        ghost.style.display = 'none';

        imgOfShooter.style.display = '';
    }
}

function setRandomCoords() {
    var x = Math.floor(Math.random() * (graveyard.offsetWidth - ghost.offsetWidth));
    var y = Math.floor(Math.random() * (graveyard.offsetHeight - ghost.offsetHeight));

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
}

function setIntervalForGhost() {
    if (
        ghost.style.animationPlayState === 'paused' || isGameOver) {
        return;
    }

    if (ghost.style.display === 'none') {
        ghost.style.display = '';
        setRandomCoords();

    } else {
        setRandomCoords();
        markLifeStatus.getNext();
    }

    isOneTime = true;
    isLastProgress = false;
}

setInterval(setIntervalForGhost, 3000);

function markProgressOut() {
    var i = 0;

    return {
        getNext: function () {
            if (ghost.style.animationPlayState === 'paused' && isOneTime) { //исправить баг!!!!!!!!!!!
                progress[i].classList.add('_progress');
                i++;
                isOneTime = false;

                if (i === progress.length) {
                    isGameOver = true;
                }
            }
        },
        reset: function () {
            for (i = 0; i < progress.length; i++) {
                progress[i].classList.remove('_progress');
            }

            i = 0;
        }
    }
};

function markLifeStatusOut() {
    var i = 0;

    return {
        getNext: function () {
            if (lifeStatus.classList.contains('_blink') && !isLastProgress) {
                isGameOver = true;
                dropTheCurtain(false);

            } else if (isLastProgress !== undefined && !isLastProgress) {
                health[i].classList.add('_health');
                i++;

                if (i === health.length) {
                    lifeStatus.classList.add('_blink');
                }
            }
        },
        reset: function () {
            for (i = 0; i < health.length; i++) {
                health[i].classList.remove('_health');
            }

            i = 0;
        }
    }
};

function dropTheCurtain(isWin) {
    if (isWin === true) {
        graveyard.classList.add('_win');
        finalTitle.innerText = 'You win';

    } else {
        finalTitle.innerText = 'You lose';
        graveyard.classList.add('_lose');
        ghost.removeAttribute('style');
    }
}

function reset() {
    isGameOver = false;
    graveyard.classList.remove('_lose');
    graveyard.classList.remove('_win');
    imgOfShooter.removeAttribute('style');
    fire.removeAttribute('style');
    ghost.removeAttribute('style');
    ghost.style.display = 'none';
    markProgress.reset();
    markLifeStatus.reset();
    lifeStatus.classList.remove('_blink');
}
