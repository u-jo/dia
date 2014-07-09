'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
