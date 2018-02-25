'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('FinanceController', function ($scope) {
        $scope.salary = 0;
        $scope.percentage = 0;
        $scope.result = function () {
            return $scope.salary * $scope.percentage * 0.01;
        };
        $scope.remain = function () {
            return $scope.salary - $scope.result();
        };
    })
    .controller('MyCtrl1', [function () {

    }])
    .controller('MyCtrl2', [function () {

    }])
    .controller('GreetingController', function($scope){
        $scope.now=new Date(); //set the model 'now' on scope
        $scope.greeting='Hello'; //set the name model on scope
    });