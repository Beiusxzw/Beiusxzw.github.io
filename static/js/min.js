$(document).ready(function() {

    function checkOffset() {
        if ($(".fixed-top").offset().top > 100) {
            $(".fixed-top").addClass("top-nav-collapse");
            setTimeout(function() {
                $(".fixed-top").addClass("border-bottom");
            }, 1000);

        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
            setTimeout(function() {
                $(".fixed-top").removeClass("border-bottom")
            }, 1000);
        }
    }
    checkOffset();
    $(window).scroll(function() { checkOffset(); });
    $('#small-screen-menu').on("click", function() {
        $("#fullpage, #fp-nav, .brand-logo, footer").toggleClass("menu-opened");
        $("body, html").toggleClass("modal-open");
        $(this).toggleClass('open').toggleClass('custom-menu');
    });

    $(".icn-hover").on("mouseover mouseout", function(event) {
        if (event.type == "mouseover") {
            $(".hover-appear").removeClass("hidden")
        } else if (event.type == "mouseout") {
            $(".hover-appear").addClass("hidden")
        }
    })

});