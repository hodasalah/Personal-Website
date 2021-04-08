$(document).ready(function () {
    "use strict";

    // 01 - Fade Out preloader
    $('.preloader .line').delay(1000).fadeOut(500);
    $('.preloader').delay(1500).fadeOut(500);

    // Img Hover 3d
    $(".move").hover3d({
        selector: ".movie__card",
        shine: false,
        sensitivity: 50,
    });

    // Show And Hide Sections
    $(".show-about-content, .pe-7s-mouse").on("click", function () {
        $(".about-me").addClass("show-about");
    });

    $(".about-me i.la-close").on("click", function () {
        $(".about-me").removeClass("show-about");
    });

    // Animated Lines
    $(".section-button").on("click", function (e) {
        var lines_grid = $(".lines-grid");
        e.preventDefault();
        lines_grid.removeClass("loaded");

        var section = $($(this).data("section"));

        section.addClass("show");

        setTimeout(function () {
            lines_grid.addClass("loaded");
        }, 1000);
    });

    // Jqyery Show & Hide Animation Loaded
    $(".section-close i, .section-close").on("click", function (e) {
        var lines_grid = $(".lines-grid");
        e.preventDefault();

        lines_grid.removeClass("loaded");

        var section = $($(this).data("section"));

        section.removeClass("show");

        setTimeout(function () {
            lines_grid.addClass("loaded");
        }, 1000);
    });

    //  Auto Type Setup

    $(".short-info .typed").typed({
        strings: [
            "<span>Freelancer.</span>&nbsp;",
            "<span>Ui & Ux Designer.</span>&nbsp;",
            "<span>Front End Web developer.</span>",
        ],
        loop: true,
        startDelay: 1000,
        backDelay: 2000,
    });

    // Testimonials Slider
    $(".testimonials-carousel").owlCarousel({
        loop: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='pe-7s-angle-left'></i>",
            "<i class='pe-7s-angle-right'></i>",
        ],
    });
    // Service Slider
    $(".service-carousel").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        navText: [
            "<i class='pe-7s-angle-left'></i>",
            "<i class='pe-7s-angle-right'></i>",
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    //  Clients Slider
    $(".clients-carousel").owlCarousel({
        loop: true,
        items: 3,
        nav: true,
        dots: false,
        responsiveClass: true,
        navText: [
            "<i class='pe-7s-angle-left'></i>",
            "<i class='pe-7s-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    // portfolio list
    var portPart = $(".my-portfolio .row .mix");
    portPart.each(function () {
        $(this).hoverdir();
    });

    $(".grid").mixItUp();

    // progress bar
    function animateProgressBar() {
        $(".skill-box .progress-line > span").each(function () {
            var percent = $(this).data("percent");
            $(this).css({
                width: percent + "%",
                transition: "width 1.5s linear",
            });
        });
    }

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $(".my-resume").offset().top - 60) {
            animateProgressBar();
        }
    });
    if ($(window).scrollTop() > $(".my-resume").offset().top - 60) {
        animateProgressBar();
    }
});
