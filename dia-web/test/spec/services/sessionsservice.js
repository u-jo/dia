'use strict';

describe('Service: sessionsService', function () {

  // load the service's module
  beforeEach(module('diaWebApp'));

  // instantiate service
  var sessionsService;
  beforeEach(inject(function (_sessionsService_) {
    sessionsService = _sessionsService_;
  }));

  it('should do something', function () {
    expect(!!sessionsService).toBe(true);
  });

});
