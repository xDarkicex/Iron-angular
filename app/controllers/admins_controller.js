'use strict';

angular.module('myApp.admins_contoller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/admin', {
    templateUrl: 'admin/index.html',
    controller: 'adminCtrl'
  });
}])

.controller('adminCtrl', [function() {

}]);
