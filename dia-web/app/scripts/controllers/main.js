'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
