let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let i = 1;
let soundOn = false;
let start = false;
gameSound = new Audio('audio/peepe_loco.mp3');
startSound = new Audio('audio/start.mp3');


function soundOnOff() {
  if (soundOn == false) {
    soundOn = true;
    document.getElementById('soundoff').classList.add('d-none');
    document.getElementById('soundon').classList.remove('d-none');
    if (start == false)
      this.startSound.play();
      this.startSound.volume = 0.5;
    if (start == true)
      this.gameSound.play();
      this.gameSound.volume = 0.9;
  } else {
    soundOn = false;
    this.startSound.pause();
    document.getElementById('soundoff').classList.remove('d-none');
    document.getElementById('soundon').classList.add('d-none');
  }
}


function setStopableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
}


function stopGame() {
  intervalIds.forEach(clearInterval);
  this.gameSound.pause();
}


function showInfo(){
  document.getElementById('info').classList.remove('d-none');
}

function cancelInfo(){
  document.getElementById('info').classList.add('d-none');
}


/**
 * Start game function. It gets the canvas, checkes for mobile devicec an initiates the level.
 * It creates the world and hitdes all the intro and outro elements.
 */
function startGame() {
  start = true;
  this.initLevel();
  this.startSound.pause();
  document.getElementById('start').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  if (soundOn == true) {
    this.gameSound.play();
    this.gameSound.volume = 0.9;
  }
  document.getElementById('mobile-key').classList.remove('d-none');
  document.getElementById('info-button').classList.add('d-none');
  document.getElementById('soundoff').classList.add('d-none');
  document.getElementById('soundon').classList.add('d-none');
}


function restartGame() {
  location.reload();
}


function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  initTouchButtons();
}


function fullscreen() {
  document.getElementById('canvas').classList.add('full-screen');
  document.getElementById('gamename').classList.add('d-none');
  document.getElementById('button').classList.remove('midle');
  document.getElementById('button').classList.add('midle-full');
  document.getElementById('start-img').classList.add('full-screen');
  document.getElementById('game_over_win2').classList.add('full-screen');
  document.getElementById('info-button').classList.add('none-button');
  document.getElementById('soundoff').classList.add('icon-full');
  document.getElementById('soundon').classList.add('icon-full');
  document.getElementById('game_over2').classList.add('full-screen');
  document.getElementById('fullscreen').classList.add('d-none');
  document.getElementById('smallscreen').classList.remove('d-none');
  document.getElementById('mobile-key').classList.add('full-key');
}


function smallscreen() {
  document.getElementById('canvas').classList.remove('full-screen');
  document.getElementById('gamename').classList.remove('d-none');
  document.getElementById('button').classList.add('midle');
  document.getElementById('button').classList.remove('midle-full');
  document.getElementById('start-img').classList.remove('full-screen');
  document.getElementById('game_over_win2').classList.remove('full-screen');
  document.getElementById('game_over2').classList.remove('full-screen');
  document.getElementById('fullscreen').classList.remove('d-none');
  document.getElementById('smallscreen').classList.add('d-none');
  document.getElementById('info-button').classList.remove('none-button');
  document.getElementById('soundoff').classList.remove('icon-full');
  document.getElementById('soundon').classList.remove('icon-full');
  document.getElementById('mobile-key').classList.remove('full-key');
}


 /**
  * Eventlistener for key down events.
  */
window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});


/**
* Eventlistener for key up events.
*/
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});


/**
 * Eventlistener for touch inputs.
 */
function initTouchButtons() {
  document.getElementById('left-mobil').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById('left-mobil').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById('right-mobil').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
  document.getElementById('right-mobil').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
  document.getElementById('jump-mobil').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });
  document.getElementById('jump-mobil').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });
  document.getElementById('bottle-mobil').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
  document.getElementById('bottle-mobil').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
}