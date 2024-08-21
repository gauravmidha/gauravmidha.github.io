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

  // Dark Mode Toggle Functionality
  const darkModeToggle = document.getElementById('toggle-dark-mode');
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  
  // Set the initial dark mode state based on user preference
  darkModeToggle.checked = isDarkMode;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }

  // Toggle dark mode on switch change
  darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    localStorage.setItem('dark-mode', darkModeToggle.checked); // Save user preference
  });

})(jQuery); // End of use strict
