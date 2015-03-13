angular.module('pocApp.batch.traffic', [
	'ui.router'
])

 
.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider,   $urlRouterProvider) {
	$stateProvider
		.state("batch.traffic", {
			url: "/traffic?metrics&startTime&endTime&granularity&filter&maxResults",

			templateUrl: 'partials/batch/traffic.html',

			controller: "BatchTrafficCtrl"
		})
	}
])

.controller("BatchTrafficCtrl", function($scope, $stateParams, BatchService){
	console.log("BatchTrafficCtrl reached!", $stateParams);
	var queryData = $stateParams;
	//   /traffic?metrics=["sessions"]&startTime="2015-03-06 00:00:00"&endTime="2015-03-12 23:59:59"&granularity=dayfilter="site=0"&maxResults=300



	//var queryData = {"metrics":["sessions"],"startTime":"2015-03-06 00:00:00","endTime":"2015-03-12 23:59:59","granularity":"day","filter":"site=0","maxResults":300};



	BatchService.query({}, queryData, function(data) {
		console.log(data);
	}, function (error){
		console.log(error);
	});

	$scope.stateParams = $stateParams;
});