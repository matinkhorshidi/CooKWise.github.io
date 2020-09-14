$(document).ready(function () {


    $('.js--section-sticky-nav').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '200px;'
    });
//        $('.js--scroll-to-start').click(function () {
//            $('html, body').animate({
//                scrollTop: $('.js--section-features').offset().top
//            }, 1000);
//        });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top-50
        }, 800);
    });


    //  Navigation smooth scroling

        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                event.preventDefault();
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top-40
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });





    // ------- animate ---------

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    }, );

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '65%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    $(".js--wp-4").hover(function(){
        $( this ).addClass( "plan-box-hover" );
        }, function(){
        $( this ).removeClass( "plan-box-hover" );
      });

    $('.js--nav-icon').click(function (direction) {
        //        $('.js--main-nav').slideToggle(300);
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon span');

        nav.slideToggle(300);

        if (icon.hasClass('burger-icon')) {
            icon.addClass('mobile-nav-icon-close');
            icon.removeClass('burger-icon');

        } else {
            icon.addClass('burger-icon');
            icon.removeClass('mobile-nav-icon-close');

        }

    });



});
