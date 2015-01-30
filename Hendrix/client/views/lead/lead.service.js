(function () {
  'use strict';

  angular.module('app').factory('leadService', leadService);

  leadService.$inject = ['$http', 'apiUrl'];

  function leadService($http, apiUrl) {
    var exports = {
      get : get,
      save : save,
      remove : remove,
      query : query
    };

    return exports;

    function get(id) {
      return $http.get(apiUrl + "lead/" + id);
    }

    function save(lead) {
      if (lead.id) {
        return $http.put(apiUrl + "lead/" + lead.id, {
          data : lead
        });
      } else {
        return $http.post(apiUrl + "lead", {
          data : lead
        });
      }
    }

    function remove(id){
      return $http.delete(apiUrl + "lead/" + id);
    }

    function query(query, page) {
      return $http.get(apiUrl + "lead/query", {
        params : {
          query : query,
          page : page
        }
      });
    }
  }
}());

