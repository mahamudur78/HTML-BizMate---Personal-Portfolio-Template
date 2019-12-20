(function($) {
    "use strict";
  
	// 01.Preloader
    var win = $(window);
    win.on('load', function() {
        $('.preloader').fadeOut('slow');;
    });

    // 02. START MENU BACKGROUND CHANGE JS
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });

    // 03. START SCROLLSPY JS
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });
        
    // 04. START TOGGLE DROPDOWN JS
        $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });

     // 05. START SMOOTH SCROLL JS
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 70
            }, 1200);
            e.preventDefault();
        });

		// 06. Menu Sticky
		$(window).on('scroll',function() {    
			var scroll = $(window).scrollTop();
			if (scroll < 245) { 
				$(".sticker").removeClass("stick");
			}else{
				$(".sticker").addClass("stick");
			}
		}); 
		
		// 07. Bootstrap Menu Fix For Mobile
		$(document).on('click', '.navbar-collapse.in', function(e) {
			if ($(e.target).is('a')) {
				$(this).collapse('hide');
			}
		});

		// 08. MixItUp
		$('#Container').mixItUp();

		$('.image-link').magnificPopup({
		  type: 'image',
		  gallery:{
			enabled:true
		  }
		});
		$('.testimonial-active').owlCarousel({
			loop:true,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				}
			}
		})
		$('.blog-active').owlCarousel({
			loop:true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				}
			}
		})

		//09. CounterUp
		$('.counter').counterUp({
			delay: 10,
			time: 2000
		}); 

		$(document).ready(function() {
		  $('.progress .progress-bar').css("width",
					function() {
						return $(this).attr("aria-valuenow") + "%";
					}
			)
		});

		// 10. START SCROLL UP JS
			$(window).scroll(function () {
				if ($(this).scrollTop() > 250) {
					$('.scroll-up').fadeIn();
				} else {
					$('.scroll-up').fadeOut();
				}
			});
			$('.scroll-up').on("click", function () {
				$("html, body").animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		// 10. Google Maps js
	 var myCenter=new google.maps.LatLng(30.2767111, -97.747671915);
            function initialize()
            {
                var mapProp = {
                	center:myCenter,
               		scrollwheel: false,
                	zoom:15,
                	mapTypeId:google.maps.MapTypeId.ROADMAP
                };
                var map=new google.maps.Map(document.getElementById("theme31"),mapProp);
                var marker=new google.maps.Marker({
	                position:myCenter,
	                animation:google.maps.Animation.BOUNCE,
	                icon:'img/map-marker.png',
	                map: map,
                });
                var styles = [
					{
						stylers: [
							{ hue: "#c5c5c5" },
							{ saturation: -100 }
						]
					},
                ];
                map.setOptions({styles: styles});
                marker.setMap(map);
            }
            google.maps.event.addDomListener(window, 'load', initialize);	

})(jQuery);