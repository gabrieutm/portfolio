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
    if (!event.target.closest('nav.menu-item') || event.target.closest('#menu-close') || event.target.closest('nav.menu-item ol li button')) {
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



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-intro").addEventListener("click", function() {
        scrollToSection("main-intro");
    });

    document.getElementById("btn-about").addEventListener("click", function() {
        scrollToSection("pi-about");
    });

    document.getElementById("btn-education").addEventListener("click", function() {
        scrollToSection("pi-education");
    });

    document.getElementById("btn-skills").addEventListener("click", function() {
        scrollToSection("pi-skills");
    });

    document.getElementById("btn-experience").addEventListener("click", function() {
        scrollToSection("pi-experience");
    });

    document.getElementById("btn-projects").addEventListener("click", function() {
        scrollToSection("main-projects");
    });

    document.getElementById("btn-contact").addEventListener("click", function() {
        scrollToSection("end-page");
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});