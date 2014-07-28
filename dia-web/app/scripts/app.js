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
      .state('home', {
        url: '/user/:id',
        templateUrl: '/views/auth/home.html',
        controller: 'AuthHomeCtrl',
        resolve: {
          id: function($stateParams) {
            return $stateParams.id;
          }
        },
        abstract: true
      })
      .state('home.health', {
        url: '/health',
        templateUrl: '/views/auth/health/healthHome.html',
        controller: 'AuthHealthCtrl'
      })
      .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: '/views/auth/dashboard/dashboard.html',
        controller: 'AuthDashboardCtrl'
      })
      .state('home.diary', {
        url: '/diary',
        templateUrl: '/views/auth/diary/main.html',
        controller: 'AuthDiaryCtrl',
        abstract: true
      })
      .state('home.diary.create', {
        url: '/create',
        templateUrl: '/views/auth/diary/create.html',
        controller: 'DiaryCreatePageCtrl'
      });
  })
  .run(function ($resource) {
    var csrfVerify = $resource('/api/csrf-verify.json');
    csrfVerify.get();
  });
