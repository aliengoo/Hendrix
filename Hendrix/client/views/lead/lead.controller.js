(function () {
  'use strict';

  angular.module('app').controller('Lead', Lead);

  Lead.$inject = ['lead'];

  function Lead(lead) {
    var vm = this;

    vm.ui = {
      firstName : {
        required : true
      },
      middleNames : {
        required : false
      },
      lastName : {
        required : true
      },
      address : {
        line1 : {
          required : true
        },
        line2 : {
          required : false
        },
        line3 : {
          required : false
        },
        postTown : {
          required : true
        },
        postcode : {
          required : true
        }
      }
    };

    vm.lead = lead;



  }
}());

