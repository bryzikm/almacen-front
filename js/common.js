function setFooterYear() {
    var date = new Date();
    $('footer #year').text(date.getFullYear());
}

$(document).ready(function () {

    setFooterYear();

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }

    });

    $('#btn-login').on('click', function (e) {
        e.preventDefault();

        $('#modal-login').modal('show');
    });

    $('#btn-register').on('click', function (e) {
        e.preventDefault();

        $('#modal-register').modal('show');
    });

    $('#login-submit').on('click', function (e) {
        e.preventDefault();

        window.location.href = "dashboard.html";
    });

    $('#btn-logout').on('click', function (e) {
        e.preventDefault();

        window.location.href = "index.html";
    });

    $('.delete-folder').on('click', function () {
        var temp = $(this);

        temp.closest('.folder').remove();
    });

    $('.delete-file').on('click', function () {
        var temp = $(this);

        temp.closest('.file').remove();
    });

    $('#btn-edit').on('click', function (e) {
        e.preventDefault();

        $('#modal-edit').modal('show');
    });

    $('#btn-upload').on('click', function (e) {
        e.preventDefault();

        $('#modal-upload').modal('show');
    });

    $('#btn-create').on('click', function (e) {
        e.preventDefault();

        $('#modal-create').modal('show');
    });

    $('#mobile-button').on('click', function () {

        if ($('#header .button__bar').is(':hidden')) {
            $('#header .button__bar').show();

            if(!$('#header').hasClass('fixed')) {
                $('#header').addClass('fixed');
            }
        } else {
            $('#header .button__bar').hide();
        }

    });

    $(window).resize(function () {
        $('#header .button__bar').hide();
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
