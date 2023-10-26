$(document).ready(function(){
    // Initialize Slick without dots
    $('.project_carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        dots: true,
        appendDots: ".dots-container",
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        pauseOnDotsHover: true,
        
    });
});


