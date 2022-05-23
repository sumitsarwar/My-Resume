$(document).ready(function () {
    // typing text animation script
        var typed =new Typed(".typed",{
            strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
            typeSpeed: 200,
            backSpeed: 100,
            loop: true
        })

        var typed =new Typed(".typed_2",{
            strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
            typeSpeed: 200,
            backSpeed: 100,
            loop: true
          })

    // Sticky-top menu
        $(window).scroll(function(){
            var scrolling = $(this) . scrollTop ();
            var sticky = $(".sticky-top");
            if(scrolling >= 150){
            sticky.addClass("nav-bg");
            }else{
            sticky.removeClass("nav-bg");
        }
    });


    // Service Slick Slider
        $('.service_slick_slider').slick({
            infinite: true,
            arrows: false,
            dots: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
                },  
                {
                    breakpoint: 992,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    }
                }, 
        ]
    });

    // Team Slick Slider
    $('.team-slick').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            }, 

    ]


      });



       // Smooths scrolling
       $('body').scrollspy({target: ".navbar", offset: 50});
    
       var html_body = $('html, body');
       $('nav a').on('click', function () {
           if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
               if (target.length) {
                   html_body.animate({
                       scrollTop: target.offset().top - 50
                   }, 1500);
                   return false;
               }
           }
       });


});