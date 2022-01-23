console.log("Отметка - 110/110\n1) Вёрстка валидная 10/10\n2) Верстка семантическая 20/20\n3) блок header — 6/6\n4) секция hero — 6/6\n5) секция skills — 6/6\n6) секция portfolio — 6/6\n7) секция video — 6/6\n8) секция price — 6/6\n9) секция contacts — 6/6\n10) блок footer — 6/6\n11) для построения сетки используются флексы или гриды — 2/2\n12) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону — 2/2\n13) фоновый цвет тянется на всю ширину страницы — 2/2\n14) иконки добавлены в формате .svg. — 2/2\n15) изображения в формате .jpg - 2/2\n16) есть favicon — 2/2\n17) плавная прокрутка по якорям — 5/5\n18) ссылки в футере ведут на гитхаб автора проекта и на страницу курса — 5/5\n19) интерактивность включает в себя не только изменение внешнего вида курсора — 5/5\n20) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы — 5/5")

//const burger = document.querySelector('.burger');

//burger.addEventListener('click', toggleMenu);

//function toggleMenu() {
    //burger.classList.toggle('open');
 // };
 // classList.remove('.burger')
  
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
