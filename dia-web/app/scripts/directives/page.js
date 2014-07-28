'use strict';

/**
 * @ngdoc directive
 * @name diaWebApp.directive:page
 * @description
 * # page
 */
angular.module('diaWebApp')
  .directive('page', function ($window) {
    return {
      templateUrl: '../views/auth/diary/page.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var input = $('textarea.page_content');

      	var heightFromTop = input.offset().top; 
      	input.height(window.innerHeight - heightFromTop);
        angular.element($window).bind('resize', function() {
        	var heightFromTop = input.offset().top; 
      		input.height(window.innerHeight - heightFromTop);
        });

        angular.element($window).bind('scroll', function() {
        	var heightFromTop = input.offset().top; 
        });
      }
    };
  });
