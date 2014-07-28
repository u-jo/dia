'use strict';

/**
 * @ngdoc function
 * @name diaWebApp.controller:AuthDiaryCreatepageCtrl
 * @description
 * # AuthDiaryCreatepageCtrl
 * Controller of the diaWebApp
 */
angular.module('diaWebApp')
  .controller('DiaryCreatePageCtrl', function ($scope, dateService, pageService) {


    $scope.page = {
    	content: '',
    	title: ''
    };

    $scope.savePage = function() {
    	pageService.createPage($scope.page, $scope.user.id);
    };

    $scope.pageOptionClicked('create');
    
  });
