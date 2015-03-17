angular.module('pocApp.batch.traffic', [
  'ui.router'
])

 
.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider,   $urlRouterProvider) {
  $stateProvider
    .state("batch.traffic", {
      url: "/trafficSources?granularity",

      templateUrl: 'view/batch/traffic.html',

      controller: "BatchTrafficCtrl"
    })
  }
])

.controller("BatchTrafficCtrl", ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state){
  console.log("BatchTrafficCtrl reached!", $stateParams);
  $scope.granularity = $stateParams.granularity;
  if(!$scope.granularity){
  
    $state.go("batch.traffic", {granularity:"hour"})
  }
}]);