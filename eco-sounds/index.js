const playBtn = document.querySelector('.play');
const audio = new Audio();

let isPlay = false;
audio.src = './assets/audio/forest.mp3';

function playAudio () {
    if (!isPlay) {
      
        audio.currentTime = 0;
        audio.play()
        isPlay = true;
    }
    else {
        audio.pause()
        isPlay = false;
    }
}
playBtn.addEventListener('click', playAudio);


function toggleBtn() {
    playBtn.classList.toggle('pause');
}
playBtn.addEventListener('click', toggleBtn);


const navBtn = document.querySelectorAll('.nav-item');
const image = document.querySelector('.main');
const navBtns = document.querySelector('.container');





function audioBtnChange(event) {
    if (event.target.classList.contains('nav-item')) {
        const item = event.target.dataset.item;
        audio.src = `./assets/audio/${item}.mp3`;
        image.style.backgroundImage = `url(./assets/img/${item}.jpg)`;
        playBtn.classList.add('pause');
        isPlay = false;
        playAudio();
    }
}


navBtns.addEventListener('click', audioBtnChange);


 function changeNav(event) {
    navBtn.forEach((btn) => btn.classList.remove('active'));
    event.target.classList.add('active');
    navBtns.classList.remove('active');
   }

 navBtns.addEventListener('click', changeNav);
