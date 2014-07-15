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
    'ngResource',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .state('dashboard', {
        url: '/dashboard/:id',
        templateUrl: '/views/auth/main.html',
        controller: 'AuthDashboardCtrl',
        resolve: {
          id: function($stateParams) {
            return $stateParams.id;
          }
        }
      });
  })
  .run(function ($resource) {
    var csrfVerify = $resource('/api/csrf-verify.json');
    csrfVerify.get();
  });
