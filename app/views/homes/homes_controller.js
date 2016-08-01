'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/home', {
    templateUrl: 'home/index.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);
