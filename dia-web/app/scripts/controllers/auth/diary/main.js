'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:AuthDiaryMainCtrl
 * @description
 * # AuthDiaryMainCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('AuthDiaryCtrl', function ($scope) {
  	$scope.currentPage = 'create';

  	$scope.pageOptionClicked = function(page) {
  		$scope.currentPage = page; 
  	};
  });
