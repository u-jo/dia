'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:AuthDashboardCtrl
 * @description
 * # AuthDashboardCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('AuthDashboardCtrl', function ($scope, $state, sessionsService) {
  	// TODO ADD ON LATER
    // if (sessionsService.getSignIn() === false) {
    // 	$state.go('main');
    // }

    $scope.signOut = function() {
    	sessionsService.signOut();
    	console.log('signingout');
    	$state.go('main');
    }
  });
