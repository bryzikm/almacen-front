function setFooterYear() {
    var date = new Date();
    $('footer #year').text(date.getFullYear());
}

$(document).ready(function () {

    setFooterYear();

    $(window).on('scroll', function () {

        if($(window).scrollTop() > 50 ) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }

    });

    /****************** SLOW SCROLLING ********************************************************************************/
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('body').animate({
                scrollTop: (target.offset().top - 130)
            }, 1000);
        }
    });
});
