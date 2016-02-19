/* global google */

$(document).ready(function () {
    //scroll to first descriptive sectipn
    $("#discover, #about").click(function () {
        $('html,body').animate({
            scrollTop: $(".content").offset().top
        }, 'slow');
    });

    //
    $("#services").click(function () {
        $('html,body').animate({
            scrollTop: $(".services").offset().top
        }, 'slow');
    });

    //
    $("#fees").click(function () {
        $('html,body').animate({
            scrollTop: $(".fees").offset().top
        }, 'slow');
    });
    
    $("#contact-button, #contact-us").click(function(){
        $('html,body').animate({
            scrollTop: $(".contact-container").offset().top
        }, 'slow');
    });

    // initializing maps
    initialize();
});


function initialize() {
    //map one
    var myLatLongOne = new google.maps.LatLng(35.90996028, 14.43197563);

    var mapOneOptions = {
        center: myLatLongOne,
        zoom: 15
    };

    var mapOne = new google.maps.Map(document.getElementById('map-one'),
        mapOneOptions);

    var markerOne = new google.maps.Marker({
        position: myLatLongOne,
        map: mapOne
    });

    //map two

    var myLatLongTwo = new google.maps.LatLng(35.85899177, 14.4425717);

    var mapTwoOptions = {
        center: myLatLongTwo,
        zoom: 15
    };

    var mapTwo = new google.maps.Map(document.getElementById('map-two'),
        mapTwoOptions);

    var markerTwo = new google.maps.Marker({
        position: myLatLongTwo,
        map: mapTwo
    });

    google.maps.event.addDomListener(window, 'load', initialize);
}
