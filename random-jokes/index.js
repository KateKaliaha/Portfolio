const main = document.querySelector('.main');
const p = document.createElement('p');
p.classList.add('jokes');
main.append(p);
const p2 = document.createElement('p');
p2.classList.add('author');
main.append(p2);
const button = document.querySelector('.btn');
const url = 'https://type.fit/api/quotes'
let lang = 'en'

getData()

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
   showData(data)
}

function showData (data) {
        const dataNew = data[Math.floor(Math.random() * data.length)];
         p.textContent = dataNew.text
         p2.textContent = dataNew.author     
}

const lngButton = document.querySelectorAll('.lng');
const lngButtons = document.querySelector('.header');
const lngEn = document.querySelector('.en')
const lngBy = document.querySelector('.by')
const img = document.querySelector('.picture');

function changeButtonLng(event) {
    lngButton.forEach((btn) => btn.classList.remove('active'));
    event.target.classList.add('active');
    lngButtons.classList.remove('active')
}

lngButtons.addEventListener('click', changeButtonLng);

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    // console.log(data);
    showData(data)
}

let languageEn = true;

lngEn.addEventListener('click', enChange)
function enChange() {
        button.textContent = 'famous people quotes'
        img.setAttribute('src', './assets/png/161195.png')
        getData()
        languageEn = true;
        localStorage.setItem('lang', 'en')
        // console.log(languageEn)
}

lngBy.addEventListener('click', byChange)
function byChange() {
    getQuotes()
    button.textContent = 'цытаты беларускіх пісьменнікаў'
    img.setAttribute('src', './assets/png/Y.png')
    languageEn = false;
    localStorage.setItem('lang', 'by')
    // console.log(languageEn) 
}

function changeLngBtn () {
    if (!languageEn) { 
        getQuotes() 
    } else {
        getData()
    }
}

button.addEventListener('click', changeLngBtn)

function addAnimation () {
    img.classList.add('active')
    setTimeout(deleteAnimation, 1000)
}

function deleteAnimation () {
    img.classList.remove('active')
}

button.addEventListener('click', addAnimation)


function getLocalStorage () {
lang = localStorage.getItem('lang')
    if (lang == 'en') {
        lang = 'en'
        enChange()
    } else if (lang == 'by') {
        lang = 'by'
       byChange()
        
    }
}
 getLocalStorage()

// console.log(localStorage.getItem('lang'))



console.log('Ваша отметка - 65 балла(ов)\n1) на странице есть цитата и кнопка для смены цитаты — 5 балл(а)\n2) в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс — 5 балл(а)\n3) При загрузке страницы приложения отображается рандомная цитата — 10 балл(а)\n4) При перезагрузке страницы цитата обновляется (заменяется на другую) — 10 балл(а)\n5) Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) — 10 балл(а)\n6) Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д — 10 балл(а)\n7) Можно выбрать один из двух языков отображения цитат: en/ru или en/be — 10 балл(а)\n8) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения — 5 балл(а)')
