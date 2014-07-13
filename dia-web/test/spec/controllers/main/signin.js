'use strict';

describe('Controller: MainSigninCtrl', function () {

  // load the controller's module
  beforeEach(module('diaWebApp'));

  var MainSigninCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainSigninCtrl = $controller('MainSigninCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
