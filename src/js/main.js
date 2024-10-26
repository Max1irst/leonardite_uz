$(document).ready(function () {
    $('.single-item').slick();
    $('button.slick-arrow').click(function () {
        $('details').removeAttr('open');
    });
})
