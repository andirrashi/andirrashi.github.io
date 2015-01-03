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
(function ($) {

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (ga.trackDomainMode == 2 && isCrossDomain(this.hostname, ga.trackCrossDomains)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            event.preventDefault();
            _gaq.push(["_link", this.href]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
function isCrossDomain(hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}

})(jQuery);
;
