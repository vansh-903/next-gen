(function($) {
	'use strict';
	
	
	/*PRELOADER JS*/
	$(window).on('load', function() { 
		$('.status').fadeOut();
		$('.preloader').delay(350).fadeOut('slow'); 
	}); 
	/*END PRELOADER JS*/

	jQuery(document).ready(function(){

	    // Select all links with hashes
        $('#navigation a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
        	// On-page links
        	if (
        	  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        	  && 
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
        		  scrollTop: target.offset().top
        		}, 1000, function() {
        		  // Callback after animation
        		  // Must change focus!
        		  var $target = $(target);
        		  $target.focus();
        		  if ($target.is(":focus")) { // Checking if the target was focused
        			return false;
        		  } else {
        			$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        			$target.focus(); // Set focus again
        		  };
        		});
        	  }
        	}
          });
	

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 
		
		/*START PROGRESS-BAR JS*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS-BAR JS*/
				
	
	    
		/*START MIXITUP JS*/
		$('.work_all_item').mixItUp();
		
        	// jQuery Lightbox
			$('.lightbox').venobox({
				numeratio: true,
				infinigall: true
			});	
		/*END MIXITUP JS*/
					
								
		/*START COUNDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/*END COUNDOWN JS */
 
		function autoPlayYouTubeModal() {
			var trigger = $("body").find('[data-toggle="modal"]');
			trigger.on("click",function() {
			  var theModal = $(this).data("target"),
				videoSRC = $('#video-modal iframe').attr('src'),
				videoSRCauto = videoSRC + "?autoplay=1";
			  $(theModal + ' iframe').attr('src', videoSRCauto);
			  $(theModal + ' button.close').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			  $('.modal').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			});
		  }
		  autoPlayYouTubeModal();		  
		/*END VIDEO JS*/
		
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3],
		  loop: true
		});
		/*END PARTNER LOGO*/
		
		/*START TESTIMONIAL JS*/
		$('.carousel').carousel({
			interval:5000,
			pause:'false',
		});
		/*END TESTIMONIAL JS*/
	
		// Owl Carousel for Testimonials	
		var testiCarousel = $('.testimonials_carousel');
		testiCarousel.owlCarousel({
			loop:true,
			autoplay:false,
			dots:true,
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items:1	,
			itemsDesktop : [1199,1],
		     itemsDesktopSmall : [979,1]
		});	
		
		/*START CONTACT MAP JS*/
		var contact = {'lat':'-37.7622470161679', 'lon':'145.06004333496094'}; //Change a map coordinate here!
		try {
			$('#map').gmap3({
				action: 'addMarker',
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 5
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);
		} catch(err) {

		}
	   /*END CONTACT MAP JS*/

	}); 	

	/*  Stellar for background scrolling  */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* End Stellar for background scrolling  */		
		
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);