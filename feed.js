
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

