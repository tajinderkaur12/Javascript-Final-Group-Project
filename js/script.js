/******JS fot the menu toggle***** */
$(document).ready(function() {
    $("#toggle").click(function() {
        $("header .nav-ul").slideToggle();
    });
});
$(function() {
	// Owl Carousel for deals on home page
	var owl = $(".deals-carousel");
		owl.owlCarousel({
		margin: 20,
		items:1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		responsive: {
			0: {
			  items: 1
			},

			600: {
			  items: 1
			},

			1024: {
			  items: 3
			},

			1366: {
			  items: 3
			}
		  }
	});
});
$(function() {
	// Owl Carousel for welcome section on home page
	var owl = $(".active-slider");
		owl.owlCarousel({
		margin: 20,
		items:1,
		loop: true,
		nav: false,
		dots: true,
		animateOut: 'fadeOut',
		autoplay: true,
		responsive: {
			0: {
			  items: 1
			},

			600: {
			  items: 1
			},

			1024: {
			  items: 1
			},

			1366: {
			  items: 1
			}
		  }
	});
});
