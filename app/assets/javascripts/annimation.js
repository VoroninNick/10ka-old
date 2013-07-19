$(document).ready(function() {

    $('#main-cat-1').click(function() {
        if(!$('#menu-cat-1').hasClass("visited")){
            $('#menu-cat-1').slideToggle('slow', function() {
                // Animation complete.
            });
            $("#status-1").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-1").text("-");
                }else{
                    $("#status-1").text("+");
                }
            });
        }
    });

    $('#main-cat-2').click(function() {
        if(!$('#menu-cat-2').hasClass("visited")){
            $('#menu-cat-2').slideToggle('slow', function() {
                // Animation complete.
            });
            $("#status-2").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-2").text("-");
                }else{
                    $("#status-2").text("+");
                }
            });
        }
    });

    $('#main-cat-3').click(function() {
        if(!$('#menu-cat-3').hasClass("visited")){
            $('#menu-cat-3').slideToggle('slow', function() {
                // Animation complete.
            });
            $("#status-3").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-3").text("-");
                }else{
                    $("#status-3").text("+");
                }
            });
        }
    });

    $('#main-cat-4').click(function() {
        if(!$('#menu-cat-4').hasClass("visited")){
            $('#menu-cat-4').slideToggle('slow', function() {
                // Animation complete.
            });

            $("#status-4").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-4").text("-");
                }else{
                    $("#status-4").text("+");
                }
            });
        }
    });

    $('#main-cat-5').click(function() {
        if(!$('#menu-cat-5').hasClass("visited")){
            $('#menu-cat-5').slideToggle('slow', function() {
                // Animation complete.
            });

            $("#status-5").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-5").text("-");
                }else{
                    $("#status-5").text("+");
                }
            });
        }
    });

    $('#main-cat-6').click(function() {
        if(!$('#menu-cat-6').hasClass("visited")){
            $('#menu-cat-6').slideToggle('slow', function() {
                // Animation complete.
            });

            $("#status-6").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-6").text("-");
                }else{
                    $("#status-6").text("+");
                }
            });
        }
    });

    $('#main-cat-7').click(function() {
        if(!$('#menu-cat-7').hasClass("visited")){
            $('#menu-cat-7').slideToggle('slow', function() {
                // Animation complete.
            });

            $("#status-7").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-7").text("-");
                }else{
                    $("#status-7").text("+");
                }
            });
        }
    });

    $('#main-cat-8').click(function() {
        if(!$('#menu-cat-8').hasClass("visited")){
            $('#menu-cat-8').slideToggle('slow', function() {
                // Animation complete.
            });

            $("#status-8").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-8").text("-");
                }else{
                    $("#status-8").text("+");
                }
            });
        }
    });

    $('#main-cat-9').click(function() {
        if(!$('#menu-cat-9').hasClass("visited")){
            $('#menu-cat-9').slideToggle('slow', function() {
                // Animation complete.
            });

            $("#status-9").each(function (i) {
                if($(this).text() != "-"){
                    $("#status-9").text("-");
                }else{
                    $("#status-9").text("+");
                }
            });
        }
    });
});
