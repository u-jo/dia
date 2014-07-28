'use strict';

describe('Controller: AuthDashboardDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('diaWebApp'));

  var AuthDashboardDashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthDashboardDashboardCtrl = $controller('AuthDashboardDashboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
