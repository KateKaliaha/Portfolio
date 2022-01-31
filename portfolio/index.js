// import i18Obj from "./js/translate.js";
 (function () {
    const burgerButton = document.querySelector('.burger');
    const menu = document.querySelector('.list');
    const menuClose = document.querySelector('.burger-close');
    const menuLink = document.querySelectorAll('.nav-link');
    burgerButton.addEventListener('click', () => {
        menu.classList.add('list_active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('list_active')
    });
    if (window.innerWidth <= 768) {
        for (let i = 0; i < menuLink.length; i += 1)
        menuLink[i].addEventListener('click', () => {
            menu.classList.remove('list_active')
        });
    }
 }());

 console.log("Отметка - 85 балла(ов)\n1) блок header — 6 балл(а)\n2) секция hero — 6 балл(а)\n3) секция skills — 6 балл(а)\n4) секция portfolio — 6 балл(а)\n5) секция video — 6 балл(а)\n6) секция price — 6 балл(а)\n7) секция contacts — 6 балл(а)\n8) блок footer — 6 балл(а)\n9) нет полосы прокрутки при ширине страницы от 1440рх до 768рх — 5 балл(а)\n10) нет полосы прокрутки при ширине страницы от 768рх до 480рх — 5 балл(а)\n11) нет полосы прокрутки при ширине страницы от 480рх до 320рх — 5 балл(а)\n12) при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка — 2 балл(а)\n13) при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик — 4 балл(а)\n14) высота адаптивного меню занимает всю высоту экрана — 2 балл(а)\n15) при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку — 4 балл(а)\n16) бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений — 2 балл(а)\n17) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям — 2 балл(а)\n18) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку — 4 балл(а)")



 const portfolioBtn = document.querySelectorAll('.mysecondbutton');
 const portfolioImages = document.querySelectorAll('.picture');
 const portfolioBtns = document.querySelector('.portfolio-button');

 
 function changeImage(event) {
     if (event.target.classList.contains('mysecondbutton')) {
        const season = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
       
     };
    
    };

   portfolioBtns.addEventListener("click", changeImage);

   function changeButton(event) {
    portfolioBtn.forEach((btn) => btn.classList.remove('active'));
    event.target.classList.add('active');
    portfolioBtns.classList.remove('active');
    saveLocalStorage(season, 'season')
   }
portfolioBtns.addEventListener('click', changeButton);


import i18Obj from "./translate.js";
const lngButton = document.querySelectorAll('.switchs');
const lngEn = document.getElementById('en');
const lngRu = document.getElementById('ru');
const text = document.querySelectorAll('[data-i18]');
const lngButtons = document.querySelector('.switch-lng')



function getTranslate(lang) {
  text.forEach((element) => {
    element.textContent = i18Obj[lang][element.dataset.i18];
  });
  localStorage.setItem('lang', lang);
}
 
lngRu.addEventListener('click', () => getTranslate('ru'));
lngEn.addEventListener('click', () => getTranslate('en'));


function changeButtonLng(event) {
  lngButton.forEach((btn) => btn.classList.remove('active'));
  event.target.classList.add('active');
  lngButtons.classList.remove('active');
 }
lngButtons.addEventListener('click', changeButtonLng);

if (localStorage.getItem('lang') != null) {
  let lang = localStorage.getItem('lang');
  getTranslate(lang)
}

const switchBtn = document.querySelector('.theme-switch');
const switchTheme = document.querySelectorAll('[data-theme]');

const theme = 'light-theme';
switchBtn.addEventListener('click', () => {
  switchTheme.forEach((element) => element.classList.toggle('light-theme'));
  localStorage.setItem('theme', theme);
});


if (localStorage.getItem('theme') != null) {
  let theme = localStorage.getItem('theme');
  switchTheme.forEach((element) => element.classList.toggle(theme));
}


