$(document).ready(function () {
    $('.momenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});
