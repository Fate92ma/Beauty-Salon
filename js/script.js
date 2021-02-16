$(document).ready(function () { // Start Coding

    // Preloader

    $(".preloader").fadeOut(3000);

    // Slider

    $('#mixedSlider').multislider({
        duration: 1000,
        interval: 3000
    });

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

    // Click Me

    $(".clickme").click(function () {
        $(this).hide();
    });

    // Count To

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i <= 2500) {
            $('.timer').countTo({
                onUpdate: true
            });
        };
    });

    // Back To Top

    $(".top i").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 2000)
    });

}); // End Coding