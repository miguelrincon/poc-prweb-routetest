angular.module('pocApp.batch', [
	'ui.router',
	'pocApp.batch.overview',
	'pocApp.batch.traffic'
])

.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider,   $urlRouterProvider) {
	$stateProvider
		.state("batch", {
			url: "/batch",

			templateUrl: 'partials/batch.html',

			controller: "BatchController"
		})
	}
])

.controller("BatchController", function($scope, $state){
	$scope.granularity = {value: 1};
	$scope.testClick = function(){
		$state.go('batch.traffic', {granularity:'1'});
	}
	console.log("BatchController reached");
});