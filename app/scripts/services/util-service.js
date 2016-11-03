'use strict';

angular.module('angularDirectiveApp')
.service('UtilService', function(){

  var UtilService = {};

  UtilService.getYear = function(){
    return new Date().getFullYear();
  };

  return UtilService;
});
