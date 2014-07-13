'use strict';

/**
 * @ngdoc service
 * @name diaWebApp.sessionsService
 * @description
 * # sessionsService
 * Factory in the diaWebApp.
 */
angular.module('diaWebApp')
  .factory('sessionsService', function ($resource, $cookies) {
    var sessionsService = {};
    var signInResource = $resource('/api/signin.json', {} , {
    	createSession: {
    		method: 'POST'
    	}
    });
    var signedIn = false;
    sessionsService.setSignIn = function(status) {
    	signedIn = status;
    };

    sessionsService.getSignIn = function() {
    	return signedIn;
    };

    sessionsService.createSession = function(sessionInfo) {
    	return signInResource.createSession(sessionInfo).$promise.then(function(response) {
    		if (response.success === true) {
    			$cookies.remember_token = response.remember_token;
    			signedIn = true;
    		} else {

    		}
    		return response;
    	});
    };
    return sessionsService;	
  });
