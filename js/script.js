$(document).ready(function () {

    $(".text-button").on("mouseenter", function () {
        $(this).find("span").stop().animate({
            marginLeft: "10px"
        }, 150);
    });

    $(".text-button").on("mouseleave", function () {
        $(this).find("span").stop().animate({
            marginLeft: "7px"
        }, 150);
    });

});