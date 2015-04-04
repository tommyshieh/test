angular
  .module('example')
  .controller('MapController', function($scope, supersonic) {

    $scope.navbarTitle = "Map";
    $scope.position = "hello";
    $scope.getPosition = function()
    {
    	supersonic.device.geolocation.getPosition().then(function(position)
    	{
    		$scope.position = position;
    	});
    };
  	$scope.getPosition();



  });
