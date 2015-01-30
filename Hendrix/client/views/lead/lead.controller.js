(function () {
  'use strict';

  angular.module('app').controller('Lead', Lead);

  Lead.$inject = ['lead'];

  function Lead(lead) {
    var vm = this;
    vm.lead = lead;

  }
}());

