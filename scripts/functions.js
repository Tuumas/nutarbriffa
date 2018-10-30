/* global google */

$(document).ready(function() {
    //scroll to first descriptive sectipn
    $("#discover, #about").click(function() {
        $("html,body").animate(
            {
                scrollTop: $(".content").offset().top
            },
            "slow"
        );
    });

    //
    $("#services").click(function() {
        $("html,body").animate(
            {
                scrollTop: $(".services").offset().top
            },
            "slow"
        );
    });

    //
    $("#fees").click(function() {
        $("html,body").animate(
            {
                scrollTop: $(".fees").offset().top
            },
            "slow"
        );
    });

    $("#contact-button, #contact-us").click(function() {
        $("html,body").animate(
            {
                scrollTop: $(".contact-container").offset().top
            },
            "slow"
        );
    });
});
