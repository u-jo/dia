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
    	email: ''
    };

    function setToken(token) {
        $http.defaults.headers.common['Authorization'] = 'Token token=\"' + token + '\"';
    }


    sessionsService.setCurrentUser = function(user) {
    	currentUser.email = user.email;
        currentUser.id = user.id;
        $cookies.remember_token = user.remember_token;
        $cookies.auth_token = user.auth_token;
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
                sessionsService.setCurrentUser(user);
                setToken($cookies.auth_token);
                sessionsService.setSignIn(true);
    			$state.go('home.dashboard', { id: user.id });
    			
    		} else {
                // response if it has failed
    		}
    		return response;
    	});
    };

    sessionsService.createSessionFromSignup = function(user) {
        sessionsService.setCurrentUser(user);
        setToken($cookies.auth_token);
        sessionsService.setSignIn(true);
        $state.go('home.dashboard', { id: user.id });
    };
    return sessionsService;	
  });
