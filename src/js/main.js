//= plugins.js
//

function deviceDetector () { var b=navigator.userAgent.toLowerCase(),a=function(a){void 0!==a&&(b=a.toLowerCase());return/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b)?"tablet":/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(b)?"mobile":"desktop"};return{device:a(),detect:a,isMobile:"desktop"!=a()?!0:!1,userAgent:b}}

function onSlideLeave (index, nextIndex, direction) {
    if (index === 1 && direction === 'down') {
        $('body').addClass('_after-intro');
    } else if (index > 1 && direction === 'up' && nextIndex === 1) {
        $('body').removeClass('_after-intro');
    }
}

$(document).ready(function() {

    var slideNavigation = deviceDetector().device !== 'mobile',
        fullpageContainer = $('#fullpage'),
        makeAccordion = (deviceDetector().device === 'desktop' && $(window).width() >= 1000 && fullpageContainer.attr('data-type') === 'accordion'),
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
