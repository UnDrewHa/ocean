//= plugins.js
//

function onSlideLeave (index, nextIndex, direction) {
    if (index === 1 && direction === 'down') {
        $('body').addClass('_after-intro');
    } else if (index > 1 && direction === 'up' && nextIndex === 1) {
        $('body').removeClass('_after-intro');
    }
}

$(document).ready(function() {


    var slideNavigation = !device.mobile(),
        fullpageContainer = $('#fullpage'),
        makeAccordion = (device.desktop() && $(window).width() >= 1000 && fullpageContainer.attr('data-type') === 'accordion'),
        body = $('body');

    if (!makeAccordion && fullpageContainer) {
        fullpageContainer.fullpage({
            navigation: slideNavigation,
            navigationPosition: 'right',
            controlArrows: false,
            verticalCentered: false,
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '.header',

            onLeave: onSlideLeave
        });

        $('.js-next-section').on('click', function () {
            var target = $(this).attr('data-id');

            if (target) {
                $("html, body").animate({ scrollTop: $(target).offset().top }, 500);
            } else {
                $.fn.fullpage.moveSectionDown();
            }
            
        });
    } else {
        body.addClass('_fullpage-accordion');
        fullpageContainer.on('mouseover', '.section', function () {
            fullpageContainer.find('._active').removeClass('_active');
            $(this).addClass('_active');
        });
    }

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            $('body').addClass('_after-intro');
        } else {
            $('body').removeClass('_after-intro');
        }
    });

    $('.header__burger, .burger-menu__close, .burger-menu__overlay').on('click', function () {
        $('body').toggleClass('burger-menu-opened');
    });
});
