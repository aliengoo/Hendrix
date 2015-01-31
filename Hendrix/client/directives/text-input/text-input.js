(function () {
  'use strict';

  angular.module('app').directive('textInput', textInput);

  textInput.$inject = ['$templateCache', '_'];

  function textInput($templateCache, _) {

    var d = {
      restrict: 'E',
      transclude : true,
      template: template,
      scope: {
        label: '@',
        ngModel: '=',
        ngRequired: '='
      },
      link: link
    };

    return d;

    function template($e, $a) {
      var t = $templateCache.get('text-input/text-input.html');

      var actualTemplate = _.template(t)({
        name: $a.name,
        classes: $a.classes
      });

      return actualTemplate;
    }

    function link($s, $e, $a) {
    }
  }
}());

