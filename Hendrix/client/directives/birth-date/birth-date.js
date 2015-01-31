(function () {
  'use strict';

  angular.module('app').directive('birthDate', birthDate);

  birthDate.$inject = ['moment'];

  function birthDate(moment) {
    var exports = {
      restrict : 'E',
      templateUrl : 'birth-date/birth-date.html',
      require : '^form',
      scope : {
        birthDate : '=ngModel'
      },
      link : link
    };

    return exports;

    function link($s, $e, $a, form){
      $s.form = form;

      var lowerBoundDate = moment().add(-100, "y");
      var upperBoundDate = moment().add(-18, "y");

      var ngModel = angular.element($e.find('input')).controller('ngModel');

      ngModel.$validators.birthDate = function(modelValue) {
        var bd = moment(modelValue, "DDMMYYYY");
        return bd.isValid() && bd.isAfter(lowerBoundDate) && bd.isBefore(upperBoundDate);
      };
    }
  }

}());

