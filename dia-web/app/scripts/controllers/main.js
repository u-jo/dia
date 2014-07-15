'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('MainCtrl', function ($scope, $http, $log, $state, $modal, userService, sessionsService) {
    if (sessionsService.getSignIn() === true) {
        $state.go('dashboard', { id: sessionsService.getCurrentUser().id });
    }

    $scope.loginSignUp = function(signUp) {
        var logInBool = false;
        var signUpBool = false;
        if (signUp === 'login') {
            logInBool = true;
        } else {
            signUpBool = true;
        }
        $modal.open({
            templateUrl: '../../../views/loginpopup.html',
            controller: 'LoginCtrl',
            size: 'sm',
            windowClass: 'login-dialog',
            resolve: {
                logIn : function() {
                    return logInBool;
                },
                signUp: function() {
                    return signUpBool;
                }
            }
        });

    };

    $scope.getUser = function() { 
        console.log($http.defaults.headers.common['Authorization']);
    	userService.getUser($scope.id).then(function(user) {
    		console.log(user);
    	});
    };

    $scope.submit = function() {
    	var user = {
    		first_name: $scope.first_name,
    		last_name: $scope.last_name,
    		email: $scope.email,
    		password: $scope.password,
    		password_confirmation: $scope.password_confirm
    	};

    	userService.createUser(user).then(function() {
    		$log.log('User was created!');
    	});
    };
  });
