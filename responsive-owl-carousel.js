function CarouselInit() {

   var checkWidth = $(window).width();
   var carousel = $(".js-carousel-catmain");
   if (checkWidth < 980) {
       carousel.addClass('owl-carousel').owlCarousel({
           items: 1,
           margin: 20,
           nav: true,
           navText: [],
           dots: false,
           responsive: {
               0: {
                   items: 1,
                   autoHeight: true
               },
               768: {
                   items: 2
               },
               980: {
                   items: 3
               },
               1240: {
                   items: 3
               }
           }
       });
   } else {
       if (carousel.data('owlCarousel') != 'undefined') {
           carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel');
       }
   }
};
$(document).ready(CarouselInit);
$(window).resize(CarouselInit);









$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})




responsive: {
    // breakpoint from 0 up
    0: {
        option1: value,
        option2: value,
        ...
    },
    // breakpoint from 480 up
    480: {
        option1: value,
        option2: value,
        ...
    },
    // breakpoint from 768 up
    768: {
        option1: value,
        option2: value,
        ...
    }
}




$('.owl-carousel').owlCarousel({
        loop: true, // loop is true up to 1199px screen
        nav: true, // is true across all sizes
        margin: 10, // margin 10px till 960 breakpoint
        responsiveClass: true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
        responsive: {
            678: {
                items: 4, // from this breakpoint 678 to 959
                center: true // only within 678 and next - 959
            },

            960: {
                items: 5, // from this breakpoint 960 to 1199
                margin: 20, // and so on...
                center: false

            },

            1200: {
                items: 6,
                loop: false,
                margin: 30,
            }
        }
    })



/*


//default settings:
//autoplay: false
//autoplayTimeout: 5000
//autoplayHoverPause: false



var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
}); 
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})  


 $(".owl-carousel-product").owlCarousel({
     items: 3,
     itemsDesktop: [1400, 3], //1400:screen size, 3: number if items in the slide
     itemsDesktopSmall: [1100, 2],
     itemsTablet: [700, 1],
     itemsMobile: [500, 1]
 });
 
 
 data-items=’1′ and data-sm-items=’2′,
 */




$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        //   center: true,
        //   dotsEach: true,
        //   autoWidth: true,
        loop: true, // loop is true up to 1199px screen
    //    nav: true, // is true across all sizes
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
        responsive: {
            0: {  // from this breakpoint 0 to 677
                items: 1,
                margin: 20,
                autoHeight: true,
            },
            
            678: {  // from this breakpoint 678 to 959
                items: 4,
                margin: 23,
            //    center: true
            },

            960: {  // from this breakpoint 960 to 1199
                items: 5,
                margin: 25,
           //     center: false

            },

            1200: {
                items: 6,
                margin: 30,
            }
        }
    });
})









var img = document.getElementById("myImageID");
var imgWidth = img.clientWidth;
var imgHeight = img.clientHeight;

<div class="owl-carousel" data-plugin-options='{"items": 12, "autoplay": true, "margin": 60, "autoWidth": true, "autoplayTimeout": 2000}'>

   .owl - carousel.owl - stage {
           display: flex;
       }

       .owl - carousel.owl - item img {
           width: auto;
           height: 100 % ;
       }