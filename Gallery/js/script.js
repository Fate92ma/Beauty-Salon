/* jQuery */

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

    // Gallery

    $(function () {
        var selectedClass = "";
        $(".filter").click(function () {
            selectedClass = $(this).attr("data-rel");
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
            setTimeout(function () {
                $("." + selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
            }, 300);
        });
    });

    // Back To Top

    $(".top i").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 2000)
    });

}); // End Coding