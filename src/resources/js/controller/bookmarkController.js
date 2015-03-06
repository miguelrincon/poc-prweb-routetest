/*POC for prweb*/
'use strict';
angular.module('pocApp.bookmark', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookmark', {
    controller: 'BookmarkCtrl'
  });
}]).controller('BookmarkCtrl',function($scope) {

});