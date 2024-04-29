//menu
const menuopen = document.querySelector('#menu-open i');
const menushow = document.querySelector('#menu nav ol');
const menuclose = document.querySelector('#menu-close i');



menuopen.addEventListener('click', function() {
    menushow.style.display = 'block';
    menuopen.style.display = 'none';
    menuclose.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('nav.menu-item') || event.target.closest('#menu-close')) {
        menushow.style.display = 'none';
        menuclose.style.display = 'none';
        menuopen.style.display = 'block';
    }
});



const menubar = document.getElementById('menu');
const sectionfirst = document.getElementById('main-intro');

window.addEventListener('scroll', function() {
    const sectionRect = sectionfirst.getBoundingClientRect();
    
    if (sectionRect.bottom <= 0) {
        menubar.style.display = 'flex';
    } else {
        menubar.style.display = 'none';
    }
});