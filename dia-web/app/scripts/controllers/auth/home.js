'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:AuthDashboardCtrl
 * @description
 * # AuthDashboardCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('AuthHomeCtrl', function ($scope, $state, sessionsService) {
  	// TODO ADD ON LATER
    // if (sessionsService.getSignIn() === false) {
    // 	$state.go('main');
    // }

    $scope.user = sessionsService.getCurrentUser(); 

    $scope.signOut = function() {
    	sessionsService.signOut();
    	$state.go('main');
    }

    $scope.selected = 'dashboard';
  });
