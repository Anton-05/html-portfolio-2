

    $(".about-me").on( "mouseenter", function(){
        $(this).hover(function(){
            $(this).html("ABOUT ME");
        })
    } ).on( "mouseleave", function(){
        $(this).hover(function(){
            $(this).html("WHO AM I?");
        })
    } );

    $(".portfolio").on( "mouseenter", function(){
        $(this).hover(function(){
            $(this).html("PORTFOLIO");
        })
    } ).on( "mouseleave", function(){
        $(this).hover(function(){
            $(this).html("PROJECTS");
        })
    } );