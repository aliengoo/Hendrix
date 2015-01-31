(function () {
  'use strict';

  angular.module('app').directive('selectionOnFocus', selectionOnFocus);

  function selectionOnFocus() {
    var exports = {
      restrict : 'A',
      link : link
    };

    return exports;

    function link($s, $e, $a) {
      if ($a.name) {
        var input = $('input[name="' + $a.name + '"]');

        input.bind('focus', function () {
          $(input).select();
        });
      }
    }
  }

}());

