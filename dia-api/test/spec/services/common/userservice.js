'use strict';

describe('Service: common/userService', function () {

  // load the service's module
  beforeEach(module('diaApiApp'));

  // instantiate service
  var common/userService;
  beforeEach(inject(function (_common/userService_) {
    common/userService = _common/userService_;
  }));

  it('should do something', function () {
    expect(!!common/userService).toBe(true);
  });

});
