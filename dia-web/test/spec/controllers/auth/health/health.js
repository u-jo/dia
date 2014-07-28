'use strict';

describe('Controller: AuthHealthHealthCtrl', function () {

  // load the controller's module
  beforeEach(module('diaWebApp'));

  var AuthHealthHealthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthHealthHealthCtrl = $controller('AuthHealthHealthCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
