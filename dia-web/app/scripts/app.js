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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      });

  });
