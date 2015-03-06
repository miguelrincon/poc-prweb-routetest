/*POC for prweb*/
'use strict';
angular.module('pocApp.batch', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/batch', {
    templateUrl: 'partials/batch.html',
    controller: 'BatchCtrl'
  });
}]).controller('BatchCtrl', [function() {

}]);