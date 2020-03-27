$(document).ready(function(){
    $('.slider__gallery').slick({
        fade: true,
        cssEase: 'linear',
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        appendArrows: $('.slider__arrows'),
        prevArrow: '<button type="button" class="slider__arrow slider__arrow_prev"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrow_next"></button>',
    });

    $('.feedback-button').on('click', function() {
        $('.feedback__overlay').css('display', 'flex');
    });

    $('.feedback__close').on('click', function () {
        $('.feedback__overlay').css('display', 'none');
    });
    
    $('.add-to-basket').on('click', function () {
        alert('Товар добавлен в корзину');
    });
});
