angular.module('pocApp.realtime', [
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider,   $urlRouterProvider) {
  $stateProvider
    .state("realtime", {
      url: "/realtime",

      templateUrl: 'view/realtime/index.html',

      controller: "RealtimeCtrl"
    })
  }
])

 .controller("RealtimeCtrl", ['$state',function($state){
   console.log("RealtimeCtrl reached!", $state);
 }]);