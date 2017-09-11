//= plugins.js
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        controlArrows: false,
        verticalCentered: true,
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '.header'
    });

    $('.header__burger, .burger-menu__close, .burger-menu__overlay').on('click', function () {
        $('body').toggleClass('burger-menu-opened');
    });

    $('.js-next-section').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
});
