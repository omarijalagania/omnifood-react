$(document).ready(function(){
    /* For Sticky Navigation */
    var waypoint = new Waypoint({
        element: document.querySelector('.section-features'),
        handler: function(direction) {
            if(direction =="down") {
                $('nav').addClass('sticky');
            }else {
                $('nav').removeClass('sticky');
            }
        },
        offset: 60 
    })
    /* For Scroll Buttons */

    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({ scrollTop: $('.section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({ scrollTop: $('.section-features').offset().top }, 1000);
    });

    /* For Navigation Menu */

    $('.js--nav-how-it-works').click(function(){
        $('html, body').animate({ scrollTop: $('.section-steps').offset().top }, 1000);
    });

    $('.js--nav-our-cities').click(function(){
        $('html, body').animate({ scrollTop: $('.section-cities').offset().top }, 1000);
    });

    $('.js--nav-sign-up').click(function(){ 
        $('html, body').animate({ scrollTop: $('.section-form').offset().top }, 1000);
    });

    $('.js--nav-food-delivery').click(function(){
        $('html, body').animate({ scrollTop: $('.section-features').offset().top }, 1000);
    });

    /* For Animations on scroll */

    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn')
    },{offset: '50%'});

    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
    },{offset: '50%'});

    $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animate__animated animate__pulse')
    },{offset: '50%'});

    /* Mobile Nav Menu */

    $('.js--nav--icon').click(function(){
        var nav = $('.main-nav');
        var icon = $('.js--nav--icon i');

        nav.slideToggle(200); 
        if (icon.hasClass('ion-md-menu')) {
            icon.removeClass('ion-md-menu');
            icon.addClass('ion-md-close');
        } else {
            icon.removeClass('ion-md-close');
            icon.addClass('ion-md-menu');
        }
    });
});  

//ion-md-close
