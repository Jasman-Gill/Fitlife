document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    updateTestimonial(currentIndex);

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById('promoPopup');
    const closeBtn = document.getElementById('closePopup');
    const claimBtn = document.querySelector('.promo-popup-btn');

    const showPopup = () => {
        popup.style.display = 'block';
    };

    const closePopup = () => {
        popup.style.display = 'none';
    };

    setTimeout(showPopup, 1000);

    closeBtn.addEventListener('click', closePopup);

    claimBtn.addEventListener('click', () => {
        alert("Offer Claimed! Enjoy your discount.");
        closePopup();
    });
});


