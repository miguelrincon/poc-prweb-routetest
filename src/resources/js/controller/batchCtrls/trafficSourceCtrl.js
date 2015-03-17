angular.module('pocApp.batch.traffic', [
	'ui.router'
])

 
.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider,   $urlRouterProvider) {
	$stateProvider
		.state("batch.traffic", {
			url: "/trafficSources",

			templateUrl: 'view/batch/traffic.html',

			controller: "BatchTrafficCtrl"
		})
	}
])

.controller("BatchTrafficCtrl", function($scope, $stateParams){
	console.log("BatchTrafficCtrl reached!", $stateParams);
	var queryData = $stateParams;

	
});