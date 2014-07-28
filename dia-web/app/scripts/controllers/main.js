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
        $state.go('home.dashboard', { id: sessionsService.getCurrentUser().id });
    }

    $scope.loginSignUp = function(signUp) {
        $scope.user = {}; 
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
                },
                userService: function() {
                    return userService;
                },
                log: function() {
                    return $log;
                },
                sessionsService: function() {
                    return sessionsService;
                },
                user: function() {
                    return $scope.user;
                }
            }
        });

    };

    
  });
