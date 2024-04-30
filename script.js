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



document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    let currentProjectIndex = 0;

    // Mostra o primeiro projeto inicialmente
    projects[currentProjectIndex].classList.add('active');

    // Função para mostrar o próximo projeto
    function showNextProject() {
        // Esconde o projeto atual
        projects[currentProjectIndex].classList.remove('active');

        // Incrementa o índice do projeto atual
        currentProjectIndex++;

        // Verifica se chegou ao final dos projetos
        if (currentProjectIndex >= projects.length) {
            currentProjectIndex = 0; // Retorna ao primeiro projeto se chegou ao final
        }

        // Mostra o próximo projeto
        projects[currentProjectIndex].classList.add('active');
    }

    // Define um intervalo para trocar os projetos automaticamente (a cada 5 segundos)
    setInterval(showNextProject, 5000);
});
