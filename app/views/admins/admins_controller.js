'use strict';

angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/admin', {
    templateUrl: 'admin/index.html',
    controller: 'adminCtrl'
  });
}])

.controller('adminCtrl', [function() {

}]);
