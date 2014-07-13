'use strict';

/**
 * @ngdoc overview
 * @name diaWebApp
 * @description
 * # diaWebApp
 *
 * Main module of the application.
 */
angular
  .module('diaWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ngTouch',
    'ui.router',
    'ngResource'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: '/views/main/signin.html',
        controller: 'MainSigninCtrl'
      });
  })
  .run(function ($resource) {
    var csrfVerify = $resource('/api/csrf-verify.json');
    csrfVerify.get();
  });
