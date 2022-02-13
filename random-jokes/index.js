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
}

lngButtons.addEventListener('click', changeButtonLng);

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
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

