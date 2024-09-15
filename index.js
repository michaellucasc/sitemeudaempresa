function sendWhatsApp(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Monta a mensagem para enviar via WhatsApp
    const msg = `Olá, meu nome é ${nome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Mensagem: ${mensagem}`;
    
    // Codifica a mensagem para uso na URL
    const encodedMsg = encodeURIComponent(msg);
    
    // Abre o WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/5543996304450?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  }

  let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imagem");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Troca a cada 5 segundos
}

function plusSlides(n) {
    slideIndex += n - 1; // Ajusta o índice manualmente
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1; // Define o slide atual
    showSlides();
}