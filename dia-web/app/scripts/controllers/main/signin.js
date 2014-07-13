'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:MainSigninCtrl
 * @description
 * # MainSigninCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('MainSigninCtrl', function ($scope, sessionsService) {
 	$scope.signIn = function() {
		sessionsService.createSession({
			email: $scope.email,
			password: $scope.password
		}).then(function(response) {
			if (response.success === true) {
				console.log("Sign in success!")
			}
		}); 		
 	};
  });
