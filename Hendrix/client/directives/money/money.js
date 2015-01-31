(function () {
  'use strict';

  angular.module('app').directive('money', money);

  money.$inject = ['$templateCache', '_', 'accounting'];

  function money($templateCache, _, accounting) {

    var d = {
      restrict: 'E',
      transclude: true,
      template: template,
      scope: {
        label: '@',
        ngModel: '=',
        ngRequired: '=',
        min: '@',
        max: '@'
      },
      link: link
    };

    return d;

    function template($e, $a) {
      var t = $templateCache.get('money/money.html');

      var actualTemplate = _.template(t)({
        name: $a.name,
        classes: $a.classes
      });

      return actualTemplate;
    }

    function link($s, $e, $a) {

      var input = $e.find('input');

      $s.ngModelCtrl = angular.element(input).controller('ngModel');

      function formatMoney(modelValue) {
        if (modelValue) {
          return accounting.formatMoney(modelValue, "£", ".", ",");
        }

        return modelValue;
      }

      function unformatMoney(viewValue) {
        if (viewValue) {
          return parseFloat(accounting.unformat(viewValue));
        }

        return viewValue;
      }

      $s.ngModelCtrl.$formatters.push(formatMoney);
      $s.ngModelCtrl.$parsers.push(unformatMoney);

      $s.ngModelCtrl.$validators.range = function (modelValue) {

        var value = parseFloat(modelValue);

        if (isNaN(value)) {
          return true;
        }

        return value >= parseFloat($s.min) && value <= parseFloat($s.max);
      };
    }
  }
}());

