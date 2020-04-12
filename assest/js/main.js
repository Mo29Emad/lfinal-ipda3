$(window).ready(function () {
    
    "use strict";
    
    // Toggle Navbar
    
    $(".our-navbar .left").click(function () {
        
        $(".our-navbar .nav-list").fadeToggle();
    })
    
    // our services slick
    
    $(".our-services .slider-items").slick({
        
        rtl: true,
        slidesToShow: 3,
        nextArrow: ".left",
        prevArrow: ".right",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
        
    });
    
    // our client slick
    
    $(".our-client .slider-items").slick({
        
        rtl: true,
        slidesToShow: 4,
        nextArrow: ".left_",
        prevArrow: ".right_",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
        
    });
    
    
})