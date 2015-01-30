(function () {
  'use strict';

  angular.module('app').controller('Home', Home);

  function Home() {
    var vm = this;
    vm.name = 'Home';
    vm.show = false;
  }


}());