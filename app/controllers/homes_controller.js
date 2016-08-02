'use strict';

angular.module('myApp.homes_controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '../../views/homes/index.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);
