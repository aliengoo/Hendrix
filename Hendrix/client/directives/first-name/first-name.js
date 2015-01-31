(function () {
  'use strict';

  angular.module('app').directive('firstName', firstName);

  function firstName() {
    var exports = {
      restrict : 'E',
      templateUrl : 'first-name/first-name.html',
      require : '^form',
      scope : {
        firstName : '=ngModel'
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

