/*POC for prweb*/
'use strict';

angular.module('pocApp', [
  'ui.router',
  'ngResource',
  'pocApp.realtime',
  'pocApp.batch'
])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
    .otherwise('/');

  $stateProvider

    //////////
    // Home //
    //////////

    .state("home", {

      // Use a url of "/" to set a states as the "index".
      url: "/",

      // Example of an inline template string. By default, templates
      // will populate the ui-view within the parent state's template.
      // For top level states, like this one, the parent template is
      // the index.html file. So this template will be inserted into the
      // ui-view within index.html.
      templateUrl: 'view/index.html',

    })
}])

