(function () {
  'use strict';

  angular.module('app').directive('middleNames', middleNames);

  function middleNames() {
    var exports = {
      restrict : 'E',
      templateUrl : 'middle-names/middle-names.html',
      require : '^form',
      scope : {
        middleNames : '=ngModel'
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

