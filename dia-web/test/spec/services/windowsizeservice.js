'use strict';

describe('Service: windowSizeService', function () {

  // load the service's module
  beforeEach(module('diaWebApp'));

  // instantiate service
  var windowSizeService;
  beforeEach(inject(function (_windowSizeService_) {
    windowSizeService = _windowSizeService_;
  }));

  it('should do something', function () {
    expect(!!windowSizeService).toBe(true);
  });

});
