
// This is a controller for one of the main sections of the reporting tool

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

      
      abstract: true,

      controller: "BatchController",

      templateUrl: 'view/batch/index.html',
    })
  }
])

.controller("BatchController", function($scope, $state){
  
  // Here we can perform openrations global to this sections
  $scope.state = $state;

  console.log("BatchController reached");
});