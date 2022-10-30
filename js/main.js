(function ($) {
    $(document).ready(function () {

        // Catalog filter
        $('.filter__row-title').click(function(e){
            $(this).toggleClass('_active');
            $(this).next().slideToggle(200);
        })

        // Product gallery
        if ($('.product__gallery .swiper-container').length > 0) {
            var main_slider = new Swiper('.product__gallery .swiper-container', {
                slidesPerView: 1,
                pagination: {
                    el: ".product__gallery-pagination",
                },
            });
        }

        // Select
        $(document).on('click', '.select__result', function( e ){
           e.preventDefault();

           $(this).toggleClass('_active');
           $(this).next().slideToggle(200);

        });

        $(document).on("click", function(e) {
            if (!$(e.target).is(".select *")) {
                $('.select__list').slideUp(200);
                $('.select__result').removeClass('_active');
            };
        });

        $(document).on('click', '.select__item', function( e ){
            e.preventDefault();

            let select = $(this).parents('.select'),
                value = $(this).data('value'),
                text = $(this).text();

            select.find('.select__result').toggleClass('_active');
            select.find('.select__result span').text(text);
            select.find('.select__list').slideToggle(200);
            select.find('input[type="hidden"]').val(value);

        });

        // popup
        $('.open-popup').click(function(e){
            e.preventDefault();

            let popup = $(this).data('popup');
            $('body').css({'overflow':'hidden'});
            $('.popup').fadeOut(200);

            $('#'+popup+'').fadeIn(200);

        });

        $('.popup__close, .popup__bg, .close--popup, .popup-succes__close').click(function(e){
            e.preventDefault();

            $('.popup').fadeOut(200);
            $('body').css({'overflow':'auto'});
        });

        // Filter price
        $('.filter__price-slider').slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
        });

        // mobile menu
        $('.header__mmenu').click(function( e ){
            e.preventDefault();

            $('body').css({'overflow':'hidden'});
            $('.mmenu').fadeIn(200);

        });

        $('.mmenu__close').click(function( e ){
            e.preventDefault();

            $('body').css({'overflow':'auto'});
            $('.mmenu').fadeOut(200);

        });

        $('.mmenu__title._catalog').click(function( e ){
            e.preventDefault();

            $(this).toggleClass('_active');
            $(this).next().slideToggle(200);

        });

        if ($(window).width() < 1025){
            var table_width = $('.comparsion__table._top').width();
            $('.comparsion__body ').css({'width':table_width});
        }

        /*
        // Price slider
        $('.filter__slider').slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
        });

        if ($('.product-gallery').length > 0) {
            var main_slider = new Swiper('.product-gallery', {
                slidesPerView: 1,
                pagination: {
                    el: ".product-gallery__buttons",
                },
            });
        }

        $('.faq__item-head').click(function (e){
            e.preventDefault();

            $(this).toggleClass('_active');
            $(this).next().slideToggle();

        });

        $(document).on('click', '._minus', function (){
            let block = $(this).parents('.quanity, .catalog-item__quanity'),
                val = parseInt(block.find('input').val());

            val = (val <= 1 ? 1 : val + 1);
            block.find('input').val(1);
        });

        $(document).on('click', '._plus', function (){
            let block = $(this).parents('.quanity, .catalog-item__quanity'),
                val = parseInt(block.find('input').val());

            block.find('input').val(val + 1);
        });

        $('.order__row').on('focus', 'input:not([type="checkbox"])', function (){
            $(this).next().addClass('_focus');
        });

        $('.order__row').on('focusout', 'input', function (){
            let block = $(this).parents('.order__row');
            if ($(this).val() == ''){
                $(this).next().removeClass('_focus');
            }
        });

        $('.filter__header').click(function (e){
            e.preventDefault();

            $(this).parent().toggleClass('_active');
            $(this).next().slideToggle();

        });

        $('.filter-header__button').click(function (e){
            e.preventDefault();

            let filter = $(this).parents('.catalog__filter');
            if (filter.hasClass('_active')){
                filter.removeClass('_active');
                filter.find('.filter__gray').fadeOut(200);
            } else {
                filter.addClass('_active');
                filter.find('.filter__gray').fadeIn(200);
            }

        });*/

        /*if ($('.hhelp__slider').length > 0) {
            var main_slider = new Swiper('.hhelp__slider .swiper-container', {
                navigation: {
                    prevEl: '.hhelp__buttons .swiper-button-prev',
                    nextEl: '.hhelp__buttons .swiper-button-next',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }
            });
        }

        if ($('.hlogos__slider').length > 0){
            var logos_slider = new Swiper('.hlogos__slider .swiper-container', {
                navigation: {
                    prevEl: '.hlogos__buttons .swiper-button-prev',
                    nextEl: '.hlogos__buttons .swiper-button-next',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }
            });
        }*/
        if ($('.banner-main__wrap').length > 0) {
            $('.banner-main__wrap').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            });
        }
        

        $(".subheader__catalog, .catalogmenu").on({
            mouseenter: function () {
                $(".catalogmenu").css("display", "block");
            },
            mouseleave: function () {
                $(".catalogmenu").css("display", "none");
            }
        });

        // FAQ accordion
        $('.faq__item-head').click(function() {
            $(".faq__item-body").not($(this).next()).slideUp(400);
            $(this).next().slideToggle(400);
        
            $(".faq__item").not($(this).closest(".faq__item")).removeClass("open-accordion");
            $(this).closest(".faq__item").toggleClass("open-accordion");
        });
        $('.faq__item-body').click(function() {
        
            $(".faq__item-body").not($(this).next()).slideUp(400);
            $(this).next().slideToggle(400);
        
            $(".faq__item").not($(this).closest(".faq__item")).removeClass("open-accordion");
            $(this).closest(".faq__item").toggleClass("open-accordion");
        });

        // Link to cart

        $('.catalog-item__action--link').click(function(e) {
        });
        // $('.catalog-item__in-quanity').click(function(e) {
        //     console.log(this.closest('a'));
        //     this.closest('a').bind('click', false)
        //     console.log(e.parents('.catalog-item__in-quanity').length);
        //     if (this.closest('a').hasClass('catalog-item__in-quanity')){
        //         console.log('123');
        //     }
        //     });

        $('.cart-item__price').toLocaleString('ru');

        // console.log(parseInt($('.cart-item__price').text()));

    });
})(jQuery);


//disable link to cart on counter

let buttonCart = document.querySelectorAll('.catalog-item__action--link');

buttonCart.forEach( function (e) {
    e.addEventListener('click', (element) => {
        if (element.target.classList.contains('catalog-item__in-title') || element.target.classList.contains('catalog-item__in')) {
        }  else {
            element.preventDefault();
        }
    })
})

// add to cart button

let catalogItemButton = document.querySelectorAll('.catalog-item__action');

catalogItemButton.forEach( function (element) {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        if (!element.classList.contains('catalog-item__action--link') && !e.target.classList.contains('_minus')) {
            element.classList.add('catalog-item__action--link');
            element.innerHTML = `<div class="catalog-item__in">
            <div class="catalog-item__in-title">В корзине</div>
            <div class="catalog-item__in-quanity">
                <span class="_minus">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696699C6.01041 0.403805 5.53553 0.403805 5.24264 0.696699L0.46967 5.46967ZM2 5.25L1 5.25L1 6.75L2 6.75L2 5.25Z" fill="white"/>
                    </svg>
                </span>
                <input type="text" name="quanity" value="1">
                <span class="_plus">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23744 6.53033 6.53033L1.75736 11.3033C1.46447 11.5962 0.989592 11.5962 0.696699 11.3033C0.403805 11.0104 0.403805 10.5355 0.696699 10.2426L4.93934 6L0.6967 1.75736C0.403806 1.46447 0.403806 0.989592 0.6967 0.696699C0.989593 0.403805 1.46447 0.403805 1.75736 0.696699L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z" fill="white"/>
                    </svg>
                    </span>
            </div>
            </div>`;
            changeCounterCart();
        }
    })
})

// change counter add to cart

function changeCounterCart() {
    let counterMinusButton = document.querySelectorAll('._minus');
    let counterPlusButton = document.querySelectorAll('._plus');
    
    let cartCounter = 1;
    
    counterMinusButton.forEach( function (element) {
        element.addEventListener('click', (e) => {
            cartCounter--;
            element.nextElementSibling.value = cartCounter;
            if (cartCounter <=0) {
                
                cartCounter = 0;
                element.nextElementSibling.value = cartCounter;

                e.target.closest('.catalog-item__action').classList.remove('catalog-item__action--link');
                e.target.closest('.catalog-item__action').innerHTML = `<div class="catalog-item__button">Добавить в корзину</div>`;
            }
        })
    })
    counterPlusButton.forEach( function (element) {
        element.addEventListener('click', () => {
            cartCounter++;
            element.previousElementSibling.value = cartCounter;
        })
    })
}

changeCounterCart();