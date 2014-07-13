'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('MainCtrl', function ($scope, $log, userService) {
    $scope.getUser = function() { 
    	console.log('getting');
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
