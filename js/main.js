// preloader
document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page__preloader');
        var sliderdotshead = document.getElementById('slider-dotshead');
        var slideritem__info = document.getElementById('slider-item__info');
        var header__aside = document.getElementById('header__aside');
            if( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done');
            sliderdotshead.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
            slideritem__info.classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-0.5s');
            header__aside.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-0.5s');
        }
    }, 1000);
}
// end preloader

$(function(){
// header main slider
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead',
    });
    // header dots slider
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
            {
                breakpoint: 961,
                settings: "unslick"
            }
        ]
    });
    // end header dots slider
// end header main slider
// block SURF main slider
    $('.serf-slider').slick({
        slidesToShow: 4, 
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
// end block SURF main slider
// block SURF slider dots on map
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf-slider',
        focusOnSelect: true
    });
// end block SURF slider dots on map
// block TRAVEL main slider and block SHOP main slider
    $('.holder__slider, .shop__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    });
// end block TRAVEL main slider and block SHOP main slider
// calc sum og night and guests script
    $('.quantity-button').on('click', function(){
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + summ)
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ)
// end calc sum og night and guests script
// block SHOP animation clock on dots at board
    $('.surfboard-box__circle').on('click', function () {
        $(this).toggleClass('active')
    });
// end block SHOP animation clock on dots at board
// menu adaptive animation
    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('menu-active')
    });
    $('.surf__link, .travel__link, .sleep__link, .shop__link').on('click', function () {
        $('.menu').removeClass('menu-active')
    });
// end menu adaptive animation
});

// input type number script
$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function () {
    var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });
});
// end input type number script