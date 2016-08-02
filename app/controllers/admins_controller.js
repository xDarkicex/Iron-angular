'use strict';

angular.module('myApp.admins_controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: '../../views/admins/index.html',
    controller: 'adminCtrl'
  });
}])

.controller('adminCtrl', [function() {

}]);
