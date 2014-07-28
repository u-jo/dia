'use strict';

/**
 * @ngdoc service
 * @name diaWebApp.pageService
 * @description
 * # pageService
 * Factory in the diaWebApp.
 */
angular.module('diaWebApp')
  .factory('pageService', function ($resource, $log, $cookies, $http) {
    /* id refers to diary id*/
    var pageResource = $resource('/api/users/:id/diary.json', { id: '@id'});

    var pageService = {};

    pageService.createPage = function(page, id) {
      page.page_text = page.content;
      delete page.content;
      return pageResource.save({ id: id, page: page}).$promise.then(function(response) {
        $log.log('Page Saved');
      });

    };
    return pageService;
  });
