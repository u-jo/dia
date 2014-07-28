'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('LoginCtrl', function ($scope, $modalInstance, log, logIn, signUp, sessionsService, userService, user) {
  	$scope.logIn = logIn;
  	$scope.signUp = signUp;
  	$scope.user = user;
  	$scope.close = function() {
  		$modalInstance.close();
  	};

  	
  	$scope.changePopupState = function() {
  		$scope.logIn = !$scope.logIn;
  		$scope.signUp = !$scope.signUp;
  	};

  
    $scope.login = function() {
    	var userLogin = {
    		email: $scope.user.email,
    		password: $scope.user.password
    	};
    	sessionsService.createSession(user).then(function(response) {
    		$modalInstance.close();
    	});
    };

    $scope.signup = function() {
        var user = {
            email: $scope.user.signupEmail,
            password: $scope.user.signupPassword,
            password_confirmation: $scope.user.signupPassConfirm
        };

        userService.createUser(user).then(function(response) {
            sessionsService.createSessionFromSignup(response.user);
            $modalInstance.close();
        });
    };

  });
