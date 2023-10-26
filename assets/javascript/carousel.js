$(document).ready(function() {
    var $carousel = $('.project_carousel');
    var isPlaying = true;

    $carousel.slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: isPlaying,
        autoplaySpeed: 5000,
        variableWidth: true,
        dots: true,
        appendDots: ".dots-container",
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        pauseOnDotsHover: true,
    });

    $('.pause-play').click(function() {
        if (isPlaying) {
            $carousel.slick('slickPause');
            isPlaying = false;

            $('.pause-play .play').show();
            $('.pause-play .pause').hide();

        } else {
            $carousel.slick('slickPlay');
            isPlaying = true;

            $('.pause-play .pause').show();
            $('.pause-play .play').hide();
        }
    });
});
