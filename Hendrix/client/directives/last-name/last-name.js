(function () {
  'use strict';

  angular.module('app').directive('lastName', lastName);

  function lastName() {
    var exports = {
      restrict : 'E',
      templateUrl : 'last-name/last-name.html',
      require : '^form',
      scope : {
        lastName : '=ngModel'
      },
      link : link
    };

    return exports;

    function link($s, $e, $a, form){
      $s.form = form;
      $s.required = true;
    }
  }

}());

