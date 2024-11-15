
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado por se inscrever em nossa newsletter!');
    newsletterForm.reset();
});

// const gifElement = document.getElementById('gif1');
// 
// gifElement.addEventListener('mouseover', function() {
//   gifElement.src = gifElement.getAttribute('data-gif1'); // Troca para o GIF
// });
// 
// gifElement.addEventListener('mouseout', function() {
//   gifElement.src = gifElement.getAttribute('data-static1'); // Volta para a imagem estática
// });
// 
// const gifElement = document.getElementById('gif');
// 
// gifElement.addEventListener('mouseover', function() {
//   gifElement.src = gifElement.getAttribute('data-gif2'); // Troca para o GIF
// });
// 
// gifElement.addEventListener('mouseout', function() {
//   gifElement.src = gifElement.getAttribute('data-static'); // Volta para a imagem estática
// });

// Funcionalidade do menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('.nav-menu .link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
