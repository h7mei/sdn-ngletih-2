console.log("Website SDN Ngletih 1 Ready!");

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Slider Galeri
    // =========================

    new Swiper(".galeriSwiper", {

        slidesPerView: 1,
        spaceBetween: 30,

        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        breakpoints: {

            768: {
                slidesPerView: 2
            },

            992: {
                slidesPerView: 3
            }

        }

    });


    // =========================
    // Slider Ekstrakurikuler
    // =========================

    new Swiper(".ekstraSwiper", {

        slidesPerView: 1,
        spaceBetween: 25,

        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        breakpoints: {

            768: {
                slidesPerView: 2
            },

            992: {
                slidesPerView: 3
            }

        }

    });

});