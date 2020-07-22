(function($) {
    if(typeof($) !== "function")
        return;
   // smooth scroll into view for page sections
    function scrollInto(element) {
        if(element && element.get(0) && element.get(0) && element.get(0).scrollIntoView) {
            element.get(0).scrollIntoView({
                behavior:"smooth"
            });
        }
    }

    function closeNav() {
      $('#site-navigation .nav-bar').toggleClass('nav-open');
      $('#site-navigation .mobile-toggle').toggleClass('toggle-search active');
      $('.search-widget-handle').toggleClass('hidden-sm hidden-xs');
    }

    function WS_Init() {
      $("span.site-title").append("<span class='trademark'>&reg;</span>"); // add span to page title with trademark and styling
       // $(".shapely_home_parallax").css("scroll-margin", $('#site-navigation').height());
      $("div.top-parallax-section").removeAttr("overflow");

        $('#site-navigation a').on('click', function(ev) {
            if($(this).attr('href').search('#') >= 0) {
                ev.preventDefault();
                scrollInto( $('#' + $(this).attr('href').split('#').pop()) );

                // Close if a link is clicked
                closeNav();
            }
        });

        $('.content-area ').click(function () {
          // Close if the toggle looses focus
          closeNav();
        });

        if(!$('body').hasClass('home') && $('body').hasClass('page')) {
            $('body').addClass('non-home-page');
        }



    }

    // scroll to top button
    $(window).scroll(function () {
	    if ($(this).scrollTop() > 200) {
	      $('.back-to-top').fadeIn();
	    } else {
	      $('.back-to-top').fadeOut();
	    }
	  });

	  $('.back-to-top').click(function () {
	    $("html, body").animate({
	      scrollTop: 0
	    }, 500);
	      return false;
	  });


    $(document).ready(WS_Init);


}(jQuery))
