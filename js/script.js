const menu = document.getElementById('menu-nav');
const openMenu = document.getElementById('openmenu');

openMenu.addEventListener('click', ()=> {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        openMenu.textContent = '✕'
    } else {
        openMenu.textContent = '☰'
    }
});

let menuLink = document.querySelectorAll('.menu-a');
menuLink.forEach(link => {
    link.addEventListener('click', ()=> {
        menu.classList.remove('show');
        openMenu.textContent = '☰'
    });
});