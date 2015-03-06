angular.module("pocApp").factory("RealtimeService", ['$resource', function ($resource) {
  "use strict";
   return $resource("https://www.prapi.stratus.ebay.com/prapi/v1/realtime", {}, {'query': {method: 'POST', isArray:true}});
}]);

angular.module("pocApp").factory("BatchService", ['$resource', function ($resource) {
  "use strict";
   return $resource("https://www.prapi.stratus.ebay.com/prapi/v1/core", {}, {'query': {method: 'POST', isArray:true}});
}]);