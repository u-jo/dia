'use strict';

describe('Controller: AuthDiaryMainCtrl', function () {

  // load the controller's module
  beforeEach(module('diaWebApp'));

  var AuthDiaryMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthDiaryMainCtrl = $controller('AuthDiaryMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
