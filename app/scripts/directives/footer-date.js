'use strict';

angular.module('angularDirectiveApp')
.directive('footerDate', function(){

    return {
      restrict: 'E',

      templateUrl: 'views/footer-date.html',
      controller: function($scope, UtilService){
        $scope.someValue = UtilService.getYear();
      }
    };
});
