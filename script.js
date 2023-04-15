const clickables = document.querySelectorAll('.clickable');
const paragraphs = document.querySelectorAll('[id^="none"]');
const images = document.querySelectorAll('img');

clickables.forEach(function(clickable, index) {
  clickable.addEventListener('click', function() {
    if (paragraphs[index].style.display === 'none') {
      // exibe o parágrafo clicado
      paragraphs[index].style.display = 'block';
      
      // esconde o parágrafo anterior, se existir
      if (index > 0) {
        paragraphs[index - 1].style.display = 'none';
      }
      // rola a página para a última div se o último parágrafo for clicado
      if (index === paragraphs.length - 1) {
        const parent = clickable.parentElement.parentElement;
        parent.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // oculta o parágrafo clicado
      paragraphs[index].style.display = 'none';
    }
  });
  
  // adiciona evento de clique para cada imagem
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      if (image.style.transform === 'rotate(180deg)') {
        image.style.transform = 'rotate(0deg)';
      } else {
        image.style.transform = 'rotate(180deg)';
      }
    });
  });
});


