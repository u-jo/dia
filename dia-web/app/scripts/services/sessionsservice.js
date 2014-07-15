'use strict';

/**
 * @ngdoc service
 * @name diaWebApp.sessionsService
 * @description
 * # sessionsService
 * Factory in the diaWebApp.
 */
angular.module('diaWebApp')
  .factory('sessionsService', function ($resource, $cookies, $http, $state) {
    var sessionsService = {};
    var signInResource = $resource('/api/signin.json', {} , {
    	createSession: {
    		method: 'POST'
    	}
    });
    var signedIn = false;
    var currentUser = {
        id: '',
    	first_name: '',
    	last_name: '',
    	email: ''
    };

    function setToken(token) {
        $http.defaults.headers.common['Authorization'] = 'Token token=' + token;
    }

    sessionsService.setCurrentUser = function(user) {
    	currentUser.first_name = user.first_name;
    	currentUser.last_name = user.last_name;
    	currentUser.email = user.email;
        currentUser.id = user.id;
    };

    sessionsService.getCurrentUser = function() {
        return currentUser;
    };

    sessionsService.setSignIn = function(status) {
    	signedIn = status;
    };

    sessionsService.getSignIn = function() {
    	return signedIn;
    };

    sessionsService.signOut = function() {
        sessionsService.setCurrentUser({
            id: '',
            first_name: '',
            last_name: '',
            email: ''
        });
        signedIn = false;
        delete $http.defaults.headers.common['Authorization'];
        delete $cookies.remember_token;
        delete $cookies.auth_token;
    };

    sessionsService.createSession = function(sessionInfo) {
    	return signInResource.createSession(sessionInfo).$promise.then(function(response) {
    		if (response.success === true) {
    			var user = response.user;
    			$cookies.remember_token = response.remember_token;
    			$cookies.auth_token = user.auth_token;
    			//setToken($cookies.auth_token);
                sessionsService.setCurrentUser(user);
    			$state.go('dashboard', { id: user.id });
    			signedIn = true;
    		} else {

    		}
    		return response;
    	});
    };
    return sessionsService;	
  });
