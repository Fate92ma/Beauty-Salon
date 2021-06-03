$(document).ready(function () { // Start Coding

    // Slider

    $('#mixedSlider').multislider({
        duration: 1000,
        interval: 2000
    });

    // Click Me

    $(".clickme").click(function () {
        $(this).hide();
    });

    // Count To

    $('.timer').countTo({
        onUpdate: true
    });

}); // End Coding