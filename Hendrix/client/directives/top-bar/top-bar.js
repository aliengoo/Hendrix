(function () {
  'use strict';

  angular.module('app').directive('topBar', topBar);

  function topBar() {
    var ddo = {
      restrict : 'E',
      templateUrl : 'top-bar/top-bar.html',
      controller : TopBar
    };

    return ddo;

    TopBar.$inject = ['$scope', 'leadService'];

    function TopBar($scope, leadService) {
      leadService.query($scope.query).success(function() {

      });
    }
  }

}());
