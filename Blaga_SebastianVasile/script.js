const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}


images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
});

setInterval(showNextImage, 3000);