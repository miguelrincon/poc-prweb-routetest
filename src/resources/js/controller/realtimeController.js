/*POC for prweb*/
'use strict';
angular.module('pocApp.realtime', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/realtime', {
    templateUrl: 'partials/realtime.html',
    controller: 'RealtimeCtrl'
  });
}]).controller('RealtimeCtrl',function($scope) {

});