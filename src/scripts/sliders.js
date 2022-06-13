window.onload = function () {
    document.body.classList.add('onload');
}

$(document).ready(() => {

    let testimonialsSwiper = new Swiper(".s-testimonials .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".s-testimonials .swiper-button-next",
            prevEl: ".s-testimonials .swiper-button-prev",
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
    let partnersSwiper = new Swiper(".s-partners .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".s-partners .swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    var gallerySwiper = new Swiper(".sd-gallery .swiper-gallery", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        navigation: {
            nextEl: ".sd-gallery .swiper-button-next",
            prevEl: ".sd-gallery .swiper-button-prev"
        },
        pagination: {
            el: ".sd-gallery .swiper-pagination",
            clickable: true,
        },
    });

});