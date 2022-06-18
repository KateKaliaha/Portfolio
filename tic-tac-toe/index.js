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
let count = 0;
count = document.getElementById('count');
let points = document.querySelector('.score');
let arr = ['', '', '', '', '', '', '', '', '', ''];
let arrCount = ['', '', '', '', '', '', '', '', '', ''];
let winner = '';
let figureWinner = document.querySelectorAll('.item-figure')
let itemSteps = document.querySelectorAll('.item-steps')


function StepCross(target) {
    target.classList.add('x');
    count++;
    target.innerHTML = cross;
    // localStorage.setItem('count', count);
    let crossAudio = new Audio('./assets/audio/cross.mp3');
    crossAudio.play();
}


function StepZero(target) {
    target.classList.add('o');
    count++;
        target.innerHTML = zero;
        // localStorage.setItem('count', count);
        let zeroAudio = new Audio('./assets/audio/zero.mp3')
        zeroAudio.play();
}

// function start(e) {
//         if (!step) StepCross(e.target);
//         else StepZero(e.target);
//         step = !step;
//         win()
// }

function start(e) {
        if (e.target.classList.contains('field')) {
        if(!step) {
            StepCross(e.target);
        }
        
        else StepZero(e.target);
        step = !step;
        win()
    }
}

function newGame() {
    tablePoints()
    step = false;
    count = 0;
    winner = '';
    result.innerText = '';
    fields.forEach(item => {
        item.innerHTML = '';
        item.classList.remove('x', 'o', 'active');
    });
    game.addEventListener('click', start);
}


function win() {
    let comb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < comb.length; i++) {
        if(fields[comb[i][0]].classList.contains('x') &&
        fields[comb[i][1]].classList.contains('x') &&
        fields[comb[i][2]].classList.contains('x')) {
        setTimeout(() => {
            fields[comb[i][0]].classList.add('active');
            fields[comb[i][1]].classList.add('active');
            fields[comb[i][2]].classList.add('active');
            result.innerHTML = 'Congratulate!!! X won! For ' + count + ' steps!';
        }, 1200);
        game.removeEventListener('click', start);
        winner = 'X';
        // console.log(arr)
        } else if (fields[comb[i][0]].classList.contains('o') &&
        fields[comb[i][1]].classList.contains('o') &&
        fields[comb[i][2]].classList.contains('o')) {
        setTimeout(() => {
            fields[comb[i][0]].classList.add('active');
            fields[comb[i][1]].classList.add('active');
            fields[comb[i][2]].classList.add('active');
            result.innerHTML = 'Congratulate!!! O won! For ' + count + ' steps!'
        }, 1200);
        game.removeEventListener('click', start); 
        winner = 'O';
        // console.log(arr)
        } else if (winner != 'X' && winner != 'O' && count == 9) {
        setTimeout(() => {
            result.innerHTML = 'Your forces are equal!!! No one has won! For ' + count + ' steps!'
        }, 1200);
        game.removeEventListener('click', start); 
        winner = 'Draw'

        } 
    }
    score()
}

btn.addEventListener('click', newGame);
game.addEventListener('click', start);


function score() {
     if ( winner == 'X') {
         arr.unshift(winner);
         arr.pop();
         arrCount.unshift(count);
         arrCount.pop();
    } else if (winner == 'O') {
         arr.unshift(winner);
         arr.pop();
         arrCount.unshift(count);
         arrCount.pop();
    } else if (winner == 'Draw') {
         arr.unshift(winner);
         arr.pop();
         arrCount.unshift(count);
         arrCount.pop();
    }
}



function tablePoints () {
        
    figureWinner.forEach((elem, i) => {
        if (arr[i] === undefined) {
            elem.innerHTML = ''
        } else {
            elem.innerHTML = arr[i]
        }
        localStorage.setItem('figure', JSON.stringify(arr))
        localStorage.setItem('steps', JSON.stringify(arrCount))
    }) 
    itemSteps.forEach((el, i) => {
        if (arrCount[i] === undefined) {
            el.innerHTML = ''
        } else {
            el.innerHTML = arrCount[i];
        } 
        localStorage.setItem('steps', JSON.stringify(arrCount)) 
    })
}
       
    
        
function getLocalStorage () {
    if(localStorage.getItem('figure') || localStorage.getItem('steps')) {
        let newArr = JSON.parse(localStorage.getItem('figure'))
        arr = newArr
        let newArrCount = JSON.parse(localStorage.getItem('steps'))
        // console.log(newArrCount)
        arrCount = newArrCount
        tablePoints()
    }
}

window.addEventListener('load', getLocalStorage)
         


console.log('1. Вёрстка 10/10\n -реализован интерфейс игры 5/5\n -в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс 5/5\n2. При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик 10/10\n3. Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали 10/10\n4. По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения 10/10\n5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр 10/10\n6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов 10/10\n7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения 10/10')

  