$('.banner-slider').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: [
        '<i class="fa-regular fa-chevron-left"></i>',
        '<i class="fa-regular fa-chevron-right"></i>',
    ],
    navClass: [
        'tg-btnroundprev',
        'tg-btnroundnext'
    ],
});
$('.owl-carousel').mouseover(function() {
    $('.banner-slider').trigger('stop.owl.autoplay');
});
$('.owl-carousel').mouseleave(function() {
    $('.banner-slider').trigger('play.owl.autoplay', [3000]);
});

//tour slide
$('.tours-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 30,
    autoplay: false,
    responsiveClass: true,
    responsive: {
        320: { items: 1, },
        639: { items: 2, },
        768: { items: 2, },
        992: { items: 3, },
        1200: { items: 3, }
    },
    navText: [
        '<i class="fa-regular fa-chevron-left"></i>',
        '<i class="fa-regular fa-chevron-right"></i>',
    ],
    navClass: [
        'tg-btnroundprev',
        'tg-btnroundnext'
    ],
});

//desctination slide
$('.destinations-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 40,
    autoplay: false,
    responsiveClass: true,
    responsive: {
        320: { items: 1, },
        568: { items: 2, },
        768: { items: 2, },
        992: { items: 2, },
        1200: { items: 3, }
    },
    navText: [
        '<i class="fa-regular fa-chevron-left"></i>',
        '<i class="fa-regular fa-chevron-right"></i>',
    ],
    navClass: [
        'tg-btnroundprev',
        'tg-btnroundnext'
    ],
});

//guide slide
$('.guides-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 40,
    autoplay: false,
    responsiveClass: true,
    responsive: {
        320: { items: 1, },
        568: { items: 2, },
        768: { items: 2, },
        992: { items: 2, },
        1200: { items: 3, }
    },
    navText: [
        '<i class="fa-regular fa-chevron-left"></i>',
        '<i class="fa-regular fa-chevron-right"></i>',
    ],
    navClass: [
        'tg-btnroundprev',
        'tg-btnroundnext'
    ],
});