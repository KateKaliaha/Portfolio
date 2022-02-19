let game = document.querySelector('.game');
let fields = document.querySelectorAll('.field');
let btn = document.querySelector('.new-game');
let step = false;
let zero = `<svg class="zero">
<circle r="42" cx="52" cy="55" stroke="black"
stroke-width="8" fill="none" stroke-linecap="round" />
</svg> `;
let cross = `<svg class="cross">
<line class="first" x1="15" y1="15" x2="90" y2="90"
stroke-width="9" stroke="black" stroke-linecap="round" />
<line class="second" x1="90" y1="15" x2="15" y2="90"
stroke-width="9" stroke="black" stroke-linecap="round" />
</svg>`;
let result = document.querySelector('.result');

function StepCross(target) {
target.innerHTML = cross;
let crossAudio = new Audio('./assets/audio/cross.mp3');
crossAudio.play();
}

function StepZero(target) {
target.innerHTML = zero;
let zeroAudio = new Audio('./assets/audio/zero.mp3')
zeroAudio.play();
}

function start(e) {
    if (!step) StepCross(e.target);
    else StepZero(e.target);
    step = !step;
    win();
}

function newGame() {

}

function win() {

}

btn.addEventListener('click', newGame);
game.addEventListener('click', start);