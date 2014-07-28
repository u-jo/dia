'use strict';

describe('Service: date', function () {

  // load the service's module
  beforeEach(module('diaWebApp'));

  // instantiate service
  var date;
  beforeEach(inject(function (_date_) {
    date = _date_;
  }));

  it('should do something', function () {
    expect(!!date).toBe(true);
  });

});
