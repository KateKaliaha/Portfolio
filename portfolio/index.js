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

 console.log("Отметка - 82.5 балла(ов)\n1) при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием — 20 балл(а)\n2) кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными — 5 балл(а)\n3) при клике по надписи ru англоязычная страница переводится на русский язык — 10 балл(а)\n4) при клике по надписи en русскоязычная страница переводится на английский язык — 10 балл(а)\n5) надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем — 5 балл(а)\n6) тёмная тема приложения сменяется светлой — 5 балл(а)\n7) светлая тема приложения сменяется тёмной — 10 балл(а)\n8) после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) — 5 балл(а)\n9) выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы — 5 балл(а)\n10) сложные эффекты для кнопок при наведении и/или клике — 2.5 балл(а)")



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


