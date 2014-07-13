'use strict';

/**
 * @ngdoc service
 * @name diaWebApp.userService
 * @description
 * # userService
 * Factory in the diaWebApp.
 */
angular.module('diaWebApp')
  .factory('userService', function ($resource) {

  	var userService = {};
    var userResource = $resource('/api/users/:id.json', { id: '@id', t: 0});

    userService.getUser = function(id) {
    	return userResource.get({ id: id, t: new Date().getTime() }).$promise.then(function(user) {
    		return user;
    	});
    };

    userService.createUser = function(user) {
    	return userResource.save({ user: user }).$promise.then(function() {

    	});
    };
    return userService;


    
  });
