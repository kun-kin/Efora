$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    $("#checkIn").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#checkOut").flatpickr({
        dateFormat: "d/m/Y"
    });

    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });

    $(".navbar-toggle").click(function() {
        $('.menu').toggleClass('mn-opened');
        $('body').addClass('ov-hidden');
    });
    $(".close-navbar").click(function() {
        $('.menu').removeClass('mn-opened');
        $('body').removeClass('ov-hidden');
    });

    $(".panelTitle").click(function() {
        $('.panelTitle').removeClass('active');
        $('.panelContent').slideUp();
        $(this).addClass('active');
        $(this).parents('.panel').children('.panelContent').slideDown();
    });

    $(".hasSubmenu").click(function() {
        if ($(window).width() < 991) {
            $('.submenu').slideToggle();
        }
    });




    // $('.header_navhover').hover(function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideDown("600");
    //     }
    // }, function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideUp("600");
    //     }
    // })




    $(document).mouseup(function(e) {
        if ($(e.target).closest(".menu").length ===
            0) {
            $('.menu').removeClass('mn-opened');
            $('body').removeClass('ov-hidden');
        }
    });

});