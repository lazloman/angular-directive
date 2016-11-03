describe('directive: footer-date', function() {
  var element, scope, utilService, $httpBackend, $compile;

  beforeEach(module('angularDirectiveApp'));
  beforeEach(inject(function($rootScope, _$compile_, _UtilService_, _$httpBackend_) {

    scope = $rootScope.$new();
    utilService = _UtilService_;
    $httpBackend = _$httpBackend_;
    $compile = _$compile_;
    $httpBackend.expectGET('views/footer-date.html').respond(200, {});

    element = getCompileElement();
  }));

  function getCompileElement(){
    var element = angular.element('<footer-date someValue="Sample Value"></footer-date>');
    var compiledElement = $compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should set the year', function(){
      $httpBackend.flush();
      expect(scope.someValue).toBe(utilService.getYear());
  });
});
