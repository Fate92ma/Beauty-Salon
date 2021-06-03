$(document).ready(function () {

    // Preloader

    $(".preloader").fadeOut(3000);

    // Mini

    $(".menu").click(function () {
        $(".list").toggleClass("mini");
    });

    // Header on Scroll

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 200) {
            $("header").addClass("small-header");
            $(".top i").css("visibility", "visible");
        } else {
            $("header").removeClass("small-header");
            $(".top i").css("visibility", "hidden");
        }

    });

    // Back To Top

    $(".top i").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 2000)
    });

});