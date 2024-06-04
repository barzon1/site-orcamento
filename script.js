document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
  
    function goToSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      slider.style.transform = `translateX(${-index * slideWidth}px)`;
      currentIndex = index;
    }
  
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
  
    function prevSlide() {
      goToSlide(currentIndex - 1);
    }
  
    setInterval(nextSlide, 7000); // Altera para o próximo slide a cada 3 segundos
  
    // Adiciona event listeners aos botões de navegação (opcional)
    document.getElementById('prev').addEventListener('click', prevSlide);
    document.getElementById('next').addEventListener('click', nextSlide);
  });
  

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const projeto = document.getElementById('projeto').value;

    console.log({
        nome,
        telefone,
        email,
        projeto
    });

    // Aqui você pode enviar os dados para o seu servidor
    // ou fazer o que for necessário com as informações coletadas

    alert('Obrigado pelo seu contato! Entraremos em contato em breve.');
});
