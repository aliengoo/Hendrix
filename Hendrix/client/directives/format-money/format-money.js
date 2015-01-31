(function () {
  'use strict';

  angular.module('app').directive('formatMoney', formatMoney);

  formatMoney.$inject = ['accounting'];

  function formatMoney(accounting) {
    var exports = {
      restrict : 'A',
      link : link
    };

    return exports;

    function link($s, $e, $a) {

      function formatMoney(modelValue) {
        if (modelValue) {
          return accounting.formatMoney(modelValue, "£", ".", ",");
        }

        return modelValue;
      }

      if ($a.name) {
        var input = $('input[name="' + $a.name + '"]');

        if (input) {
          var ctrl = angular.element(input).controller('ngModel');

          if (ctrl) {
            input.bind('blur', function () {

              $s.$evalAsync(function() {
                ctrl.$viewValue = formatMoney(ctrl.$modelValue);
                ctrl.$render();
              });
            });
          }
        }
      }
    }
  }

}());

