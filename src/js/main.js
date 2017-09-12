//= plugins.js
//

function deviceDetector () { var b=navigator.userAgent.toLowerCase(),a=function(a){void 0!==a&&(b=a.toLowerCase());return/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b)?"tablet":/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(b)?"mobile":"desktop"};return{device:a(),detect:a,isMobile:"desktop"!=a()?!0:!1,userAgent:b}}

function onSlideLeave (index, nextIndex, direction) {
    if (index === 1 && direction === 'down') {
        $('body').addClass('_after-intro');
    } else if (index > 1 && direction === 'up') {
        $('body').removeClass('_after-intro');
    }
}

$(document).ready(function() {

    var slideNavigation = deviceDetector().device !== 'mobile' ? true : false;
    
    $('#fullpage').fullpage({
        navigation: slideNavigation,
        navigationPosition: 'right',
        controlArrows: false,
        verticalCentered: false,
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '.header',

        onLeave: onSlideLeave
    });

    $('.header__burger, .burger-menu__close, .burger-menu__overlay').on('click', function () {
        $('body').toggleClass('burger-menu-opened');
    });

    $('.js-next-section').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
});
