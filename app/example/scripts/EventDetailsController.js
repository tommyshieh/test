
var app = angular.module('example');

app.controller('event-details-controller', function($scope, supersonic) {
    $scope.navbarTitle = "Event Details";
	$scope.dataId = undefined;
	var events = [];
	var Events = Parse.Object.extend("Events");
	var query = new Parse.Query(Events);
	
	query.find({
	  success: function(results) {
	    // convert parse object to normal js object
	    for (var i = 0; i < results.length; i++) { 
	      var object = results[i];
	      var event = {};

	      event.Comments = object.get('Comments');
	      event.EventName = object.get('EventName');
	      event.Location = object.get('Location');
	      event.PosterName = object.get('PosterName');
	      event.Time = object.get('Time');
	      event.objectId = object.Id;
	      event.createdAt = object.createdAt;
	      event.updatedAt = object.updatedAt;
	      events.push(event);

	    }

	    $scope.events = events;

	  },
	  error: function(error) {
	    supersonic.logger.error(error);
	  }
	});
    
});