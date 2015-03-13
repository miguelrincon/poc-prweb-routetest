/*angular.module("pocApp").factory("RealtimeService", ['$resource','$resourceProvider ', function ($resource,$resourceProvider) {
  "use strict";
   return $resource("http://www.prapi.stratus.ebay.com/prapi/v1/realtime", {}, {'query': {method: 'POST', isArray:true}});
}]);*/

angular.module("pocApp").factory("BatchService", ['$resource', function ($resource) {
  "use strict";
   return $resource("http://www.prapi.stratus.ebay.com/prapi/v1/core", {}, {'query': {method: 'POST', isArray:true}});
}]);