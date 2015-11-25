(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .controller('wwaSelectEmployeeCtrl', wwaSelectEmployeeCtrl);

  /** @ngInject */
  function wwaSelectEmployeeCtrl($scope, dataService){
    var vm = this;
    $scope.isLoaded = true;

    dataService.getEmployees().then(function (results) {
      $scope.employees = results;
    })
  }
})();
