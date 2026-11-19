// Set dynamic current year in footer mostly vibed-coded
    document.getElementById('year').textContent = new Date().getFullYear();

    // Horizontal Gallery Carousel Logic
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (slider && prevBtn && nextBtn) {
        // Scroll right
        nextBtn.addEventListener('click', () => {
            const cardWidth = slider.firstElementChild.offsetWidth + 16; // width + gap
            slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        // Scroll left
        prevBtn.addEventListener('click', () => {
            const cardWidth = slider.firstElementChild.offsetWidth + 16; // width + gap
            slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }