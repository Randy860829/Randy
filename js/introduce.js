const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 3000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000
    },
    // effect: 'cube',

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


$(document).ready(function () {
    $('.momenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});

