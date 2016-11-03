describe('service: util-service', function() {
  var element, scope, utilService, $httpBackend, $compile;

  beforeEach(module('angularDirectiveApp'));

  beforeEach(inject(function($rootScope, _UtilService_) {

    scope = $rootScope.$new();
    utilService = _UtilService_;
  }));

  it('should return the year', function(){
    expect(utilService.getYear()).toBe(new Date().getFullYear());
  });
});
