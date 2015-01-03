// jquery
// listen to ajax completion
// get contents of the div to get the json
// push the points on the google map
(function($) {
    var located = false;
    $(document).ready(function() {

      $('#map-canvas').mouseenter(function(){
        if (located == false){
          initialize();
          located = true;
        }
      });

    	var Input = $("#edit-zipcode");
	    var default_value = Input.val();

	    Input.focus(function() {
	        if(Input.val() == default_value) Input.val("");
	    }).blur(function(){
	        if(Input.val().length == 0) Input.val(default_value);
	    });

	    $("#edit-zipcode").keydown(function(event) {
	        // Allow: backspace, delete, tab, escape, and enter
	        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
	             // Allow: Ctrl+A
	            (event.keyCode == 65 && event.ctrlKey === true) ||
	             // Allow: home, end, left, right
	            (event.keyCode >= 35 && event.keyCode <= 39)) {
	                 // let it happen, don't do anything
	                 return;
	        }
	        else {
	            // Ensure that it is a number and stop the keypress
	            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	                event.preventDefault();
	            }
	        }
	    });

    	// set up button to call ajax
    	$( "#plastpro-geo-search-form" ).submit(function(e) {
    		e.preventDefault();
    		var zipcode = $('#edit-zipcode').val();
            var state = $('#edit-state').val();
    		var search = $("#edit-search-by input[type='radio']:checked").val();
            var proximity = $("#edit-proximity input[type='radio']:checked").val();
    		var radii = Array(8,24,80);
    		var radius = radii[proximity];
    		var infowindow = new google.maps.InfoWindow();

            if (state == '') {
                state = 0;
            }
            if (zipcode == '') {
                zipcode = 0;
            }

		    $.ajax({
			    url: "/dealer/locator/ajax/" + search + "/" + zipcode + "/" + radius + "/" + state,
			    beforeSend: function ( xhr ) {
			      xhr.overrideMimeType("text/plain; charset=x-user-defined");
			    }
			}).done(function ( data ) {
			    if( console && console.log ) {
			        // get first point in return data
			        var obj = jQuery.parseJSON(data);
			        for(var i in obj.points){
			        	var points = obj.points[i];
			        	for(var k in points){
			        		var centerObj = points[0];
			        	}
			        }
            if (centerObj) {
              var myLatlng = new google.maps.LatLng(centerObj.lat, centerObj.lng);
              var mapOptions = {
                scrollwheel: false,
                zoom:8,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: false,
                scaleControl: false
              }
              var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              var htmllist = "<ul>";
              for(var i in obj.points){
                var points = obj.points[i];
                var listitem = "dealer-locator-list-item'";
                var liclassodd = "'odd " + listitem;
                var liclasseven = "'even " + listitem;
                for(var k in points){

                  var objLatlng = new google.maps.LatLng(points[k].lat,points[k].lng);
                  var iconBase = "sites/all/modules/custom/plastpro_geo/img/map/shapes/index.html";
                  var marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: objLatlng,
                    map: map,
                    title:points[k].title,
                    icon: iconBase + 'orange_marker.png',
                    shadow: iconBase + 'orange_marker.shadow.png'
                  });
                  var contstr = '<div id="content">'+
                    '<p id="firstHeading" class="firstHeading"><strong>' + points[k].title + '</strong></p>'+
                    '<div id="bodyContent">'+
                    '<p>' + points[k].addy1 + '<br />';

                  if(points[k].addy2 != ""){
                    contstr += points[k].addy2 + '<br />';
                  }
                  contstr += points[k].city + ', ' + points[k].state + ' ' + points[k].zip + '</p>'+
                    '<p>' + points[k].phone + '<br /><a href="mailto:' + points[k].email + '">' + points[k].email + '</a>';

                  if(points[k].link != ""){
                    contstr += '<br /><a href="http://' + points[k].link + '" target="_blank">Website</a>';
                  }

                  contstr += '</p></div></div>';
                  var classstr = liclassodd;
                  if(isPositiveInteger(k) && k != 0){
                    classstr = liclasseven;
                  }
                  htmllist += "<li class=" + classstr + ">" + contstr + "</li>";
                  marker.metadata = {type: "point", id: points[k].nid};
                  google.maps.event.addListener(marker, 'click', (function(marker, k) {
                    return function() {
                      var contentString = '<div id="content">'+
                        '<p id="firstHeading" class="firstHeading"><strong>' + points[k].title + '</strong></p>'+
                        '<div id="bodyContent">'+
                        '<p>' + points[k].addy1 + '<br />';

                      if(points[k].addy2 != ""){
                        contentString += points[k].addy2 + '<br />';
                      }
                      contentString += points[k].city + ', ' + points[k].state + ' ' + points[k].zip + '</p>'+
                        '<p>' + points[k].phone + '<br /><a href="mailto:' + points[k].email + '">' + points[k].email + '</a>';

                      if(points[k].link != ""){
                        contentString += '<br /><a href="http://' + points[k].link + '" target="_blank">Website</a>';
                      }

                      contentString += '</p></div></div>';
                      infowindow.setContent(contentString);
                      infowindow.open(map, marker);
                    }
                  })(marker, k));
                }
              }
              htmllist += "</ul>";
              if($('body').hasClass('not-front')){
                $( "#dealer-locator-list-items" ).html(htmllist);
              }
            } else {
              alert("No Dealers found.");
            }
			    }
			});
		});
    });
    //google.maps.event.addDomListener(window, 'load', initialize);
})(jQuery);

function isPositiveInteger(n) {
    return n == "0" || ((n | 0) > 0 && n % 1 == 0);
}

var map;

function initialize() {

  var mapOptions = {
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
	disableDefaultUI: true,
	zoomControl: false,
	scaleControl: false
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
      /*
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });
	*/

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(33, -118),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}
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
