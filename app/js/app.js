'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/pageApp', {templateUrl: 'simplecalculation.html'});
    $routeProvider.when('/simpleModule', {templateUrl: 'simplecalculation2.html', controller: 'FinanceController'});
    $routeProvider.when('/dashboard', {templateUrl: 'dashboard.html'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);