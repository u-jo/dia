'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('LoginCtrl', function ($scope, $modalInstance, logIn, signUp) {
  	$scope.logIn = logIn;
  	$scope.signUp = signUp;

  	$scope.close = function() {
  		$modalInstance.close();
  	};

  	
  	$scope.changePopupState = function() {
  		$scope.logIn = !$scope.logIn;
  		$scope.signUp = !$scope.signUp;
  	}
  });
