(function () {
  'use strict';

  angular.module('app').directive('salary', salary);

  function salary() {
    var exports = {
      restrict : 'E',
      templateUrl : 'salary/salary.html',
      require : '^form',
      scope : {
        salary : '=ngModel'
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

