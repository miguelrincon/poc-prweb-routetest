angular.module('pocApp.batch.overview', [
	'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider,   $urlRouterProvider) {
	$stateProvider
		.state("batch.overview", {
			url: "/overview/granularity/:granularity/timeRange/:timeRange",

			templateUrl: 'partial/batch/overview.html',

			controller: "BatchOverviewCtrl"
		})
	}
])

.controller("BatchOverviewCtrl", ['$rootScope', function($rootScope){
	console.log("BatchOverviewCtrl reached!", $rootScope.state);
}]);