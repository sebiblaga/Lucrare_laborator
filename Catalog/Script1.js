let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    slideIndex = (slideIndex + 1) % slides.length;
} 
 showSlides();
 setInterval(showSlides, 3000);
