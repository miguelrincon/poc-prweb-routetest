/*POC for prweb*/
'use strict';

angular.module('pocApp', [
  'ngRoute',
  'pocApp.realtime',
  'pocApp.batch'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/pocApp.bookmark'});
}]);
