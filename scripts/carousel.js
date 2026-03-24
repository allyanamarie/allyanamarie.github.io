const carousel = document.querySelector('.lesson-carousel');
const cards = document.querySelectorAll('.lesson-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateCarousel() {
    const width = cards[0].clientWidth;
    carousel.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < cards.length - 1) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});
