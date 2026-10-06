const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.querySelector('.slider-dots');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

if (slides.length > 0) {
    let currentIndex = 0;

    const renderDots = () => {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'slider-dot' + (index === currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `Show photo ${index + 1}`);
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        });
    };

    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });

        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    };

    prevButton?.addEventListener('click', showPrev);
    nextButton?.addEventListener('click', showNext);

    renderDots();
    updateSlider();
    setInterval(showNext, 3500);
}
