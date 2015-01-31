(function () {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('lead-new', {
      templateUrl: 'lead/lead.html',
      controller: 'Lead as vm',
      url: '/lead',
      resolve : {
        lead : ['$q', 'leadValue', function($q, leadValue) {
          return $q.when(angular.copy(leadValue));
        }]
      }
    }).state('lead', {
      templateUrl: 'lead/lead.html',
      controller: 'Lead as vm',
      url: '/lead/:id',
      resolve: {
        lead: ['$stateParams', 'leadService', function ($stateParams, leadService) {
          return leadService.get($stateParams.id);
        }]
      }
    });
  }
}());

