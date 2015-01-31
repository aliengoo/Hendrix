(function () {
  'use strict';

  angular.module('app').directive('partnersSalary', partnersSalary);

  function partnersSalary() {
    var exports = {
      restrict : 'E',
      templateUrl : 'partners-salary/partners-salary.html',
      require : '^form',
      scope : {
        salary : '=ngModel'
      },
      link : link
    };

    return exports;

    function link($s, $e, $a, form){
      $s.form = form;
      $s.required = false;
    }
  }

}());

