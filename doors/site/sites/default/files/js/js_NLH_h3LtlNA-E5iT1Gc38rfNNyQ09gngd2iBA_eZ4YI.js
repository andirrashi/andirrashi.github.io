/**
 * @file
 * This javascript file handles all custom javascript manipulations of the
 * Product pages
 */

(function ($) {
  Drupal.behaviors.products = {
    attach: function(context) {
      $('.door-example-controls a').click(function(e) {
        e.preventDefault();
        var elementClicked = $(this);
        var elementClass = $(this).attr('class');
        var prevSibling = $(this).parent().prev('.door-example-images');

        if (!$(this).hasClass('button-active')) {
          elementClicked.parent().find('a').removeClass('button-active');
          $(this).addClass('button-active');

          // Hide active images if an active element wasn't selected
          if (!prevSibling.find('.'+elementClass).hasClass('active')) {
            var elementToHide = prevSibling.find('.active').stop(true, true).fadeOut(400, 'swing', function() {
              // When active images are hidden, display the selected images
              prevSibling.find('.'+elementClass).fadeIn().addClass('active');
              elementToHide.removeClass('active');
            });

            var headerToHide = elementClicked.parent().find('h3.active').stop(true, true).fadeOut(400, 'swing', function() {
              elementClicked.parent().find('h3.'+elementClass).fadeIn().addClass('active');
              headerToHide.removeClass('active');
            });
          }
        }
      });
      $('.door-example-controls a').hover(function(e){
        $(this).css('background-position', 'top right');
      }, function(){
        $(this).css('background-position', '');
      });
    }
  }
})(jQuery);
;
/**
 * @file
 * This javascript file handles all custom javascript manipulations of the
 * homepage slideshow
 */

(function ($) {
  Drupal.behaviors.slideshow = {
    attach: function(context) {
      $('#slide-controls-wrapper ul li').hover(function() {
        var elementClass = $(this).attr('class');
        if (!$('#slides').find('.'+elementClass).hasClass('active')) {
          // Hide the currently active slide
          $('#slides .active').stop(true, true).fadeOut(400, 'swing', function() {
            // When the active slide is hidden, display the selected slide
            $('#slides').find('.'+elementClass).fadeIn().addClass('active');
            // Toggle the previously active slide's classes
            $(this).removeClass('active');
          });
        }
      });
    }
  }
})(jQuery);
;
/**
 * @file
 * This javascript file handles all custom javascript manipulations of the
 * social top and bottom block items
 */

(function ($) {
  Drupal.behaviors.social_blocks = {
    attach: function(context) {
        $(window).scroll(function(){
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var footerHeight = $(".footer-container").offset().top;
            // Fixes bottom social links position
            if (docViewBottom > footerHeight) {
                $("#footer-social-media-links").removeClass('fixed-bottom');
            } else{
                $("#footer-social-media-links").addClass('fixed-bottom');
            }
        });

        // Replaces top block icons with orange variants on mouseover
        $('.header-icons img').bind('mouseenter mouseleave', function() {
            $(this).attr({
                src: $(this).attr('data-other')
                , 'data-other': $(this).attr('src')
            })
        });

        // Opens the block with social icons, hides it on mouseout
        $('#social-open').bind('click', function() {
            $('#social-icons-top').css('visibility', 'visible');
        });
        $("#social-icons-top").mouseleave(function(e) {
              $('#social-icons-top').css('visibility', 'hidden');
        });

      // Shows header search form
      $('#header-search-wrapper').once('search', function() {
        $('#header-search-icon').click(function(e) {
          e.preventDefault();
          $(this).hide();
          $('#header-search-wrapper').animate({width: 'toggle'});
          e.stopPropagation();
        });

        // Hides header search form on ckick outside it
        $('html').click(function() {
          $('#header-search-wrapper').animate({width: 'hide'});
          $('#header-search-icon').show();
        });
        $('#header-search-wrapper').click(function(event){
          event.stopPropagation();
        });
      });
    }
  }
})(jQuery);
;
