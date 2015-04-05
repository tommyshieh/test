angular
  .module('example')
  .controller('MapController', function($scope, supersonic) {

    $scope.navbarTitle = "Map";
    $scope.position = undefined;

    

		function CenterControl(controlDiv, map) {

		  // Set CSS for the control border
		  var controlUI = document.createElement('div');
		  controlUI.style.backgroundColor = '#fff';
		  controlUI.style.border = '2px solid #fff';
		  controlUI.style.borderRadius = '3px';
		  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
		  controlUI.style.cursor = 'pointer';
		  controlUI.style.marginBottom = '22px';
		  controlUI.style.marginLeft = "5px";
		  controlUI.style.textAlign = 'center';
		  controlUI.title = 'Click to recenter the map';
		  controlDiv.appendChild(controlUI);

		  // Set CSS for the control interior
		  var controlText = document.createElement('img');
		  controlText.src = "/icons/mylocation.svg";
		  controlText.width = $(window).height()/25;
		  controlText.height = $(window).height()/25;
		  controlUI.appendChild(controlText);

		  // Setup the click event listeners: simply set the map to
		  // Chicago
		  google.maps.event.addDomListener(controlUI, 'click', function() {
      	supersonic.device.geolocation.getPosition().then(function(position)
	    	{
	    		$scope.position = position;
	    		map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
	    	});
		  });
		}
    
  	var map = undefined;
		function initialize() {
      var mapOptions = {
        center: { lat: -34, lng: 150},
        zoom: 18,
        zoomControl: true,
    		zoomControlOptions: {
        	style: google.maps.ZoomControlStyle.LARGE,
        	index: 1,
        	position: google.maps.ControlPosition.LEFT_TOP
    		},
    		streetViewControl: true,
    		streetViewControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
    		}
    	};
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


      // Create the DIV to hold the control and
		  // call the CenterControl() constructor passing
		  // in this DIV.
		  var centerControlDiv = document.createElement('div');
		  var centerControl = new CenterControl(centerControlDiv, map);

		  centerControlDiv.index = 0;
		  map.controls[google.maps.ControlPosition.LEFT_TOP].push(centerControlDiv);
    }
    
		google.maps.event.addDomListener(window, 'load', initialize);



		$scope.getPosition = function()
    {
    	supersonic.device.geolocation.getPosition().then(function(position)
    	{
    		$scope.position = position;
    		map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    	});
    };
  	$scope.getPosition();
    $('#map-canvas').css("height", $(window).height());
  });
