(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function(event) {
    // Ensure the pathname and hostname match
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      // If target exists, animate scrolling
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");

        // Prevent default anchor click behavior
        event.preventDefault();
      }
    }
  });

  // Close responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
    offset: 50 // Adjust the offset for a more precise active class detection
  });

})(jQuery); // End of use strict
