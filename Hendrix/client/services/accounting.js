(function () {
  'use strict';

  angular.module('app').factory('accounting', accounting);

  accounting.$inject = ['$window'];

  function accounting($window) {
    return $window.accounting;
  }
}());

