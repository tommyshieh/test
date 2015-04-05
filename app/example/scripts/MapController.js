angular
  .module('example')
  .controller('MapController', function($scope, supersonic) {

    $scope.navbarTitle = "Map";
    
    supersonic.device.geolocation.watchPosition().onValue( function(position) {
      supersonic.logger.log(
        "Latitude: " + position.coords.latitude + "\n" +
        "Longitude: " + position.coords.longitude + "\n" +
        "Timestamp: " + position.timestamp
      );

      $('#coordinates').html(
        "Latitude: " + position.coords.latitude + "\n" +
        "Longitude: " + position.coords.longitude + "\n" +
        "Timestamp: " + position.timestamp
      );

      currentLocation = new google.maps.LatLng(position.coords.latitude,
                                               position.coords.longitude);
      map.setCenter(currentLocation);

    });

    
    // create map
    var mapOptions = {
      zoom: 18
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var viewportHeight = $(window).height();
    $('#map-canvas').css("height", 300);





    /* testing HTML5 geolocation
    var initialLocation;
    var fallbackLocation = new google.maps.LatLng(60, 105);
    var noServiceLocation = new google.maps.LatLng(0, 0);
    var browserSupportFlag =  new Boolean();

    // create map
    var mapOptions = {
      zoom: 18
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var viewportHeight = $(window).height();
    $('#map-canvas').css("height", 300);

    // looks like geomarker is not supported on supersonic
    // var GeoMarker = new GeolocationMarker(map);

    // Try W3C Geolocation (Preferred)
    if(navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        map.setCenter(initialLocation);
      }, function() {
        handleNoGeolocation(browserSupportFlag);
      });
    }
    // Browser doesn't support Geolocation
    else {
      browserSupportFlag = false;
      handleNoGeolocation(browserSupportFlag);
    }

    function handleNoGeolocation(errorFlag) {
      if (errorFlag == true) {
        alert("Geolocation service failed.");
        initialLocation = noServiceLocation;
      } else {
        alert("Your browser doesn't support geolocation.");
        initialLocation = fallbackLocation;
      }
      map.setCenter(initialLocation);
    }
    */

  });
