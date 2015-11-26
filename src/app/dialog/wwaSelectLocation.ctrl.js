(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .controller('wwaSelectLocationCtrl', wwaSelectLocationCtrl);

  /** @ngInject */
  function wwaSelectLocationCtrl($scope, dataService){
    var vm = this;
    $scope.isLoaded = false;

    dataService.getLocations().then(function (results) {
      $scope.isLoaded = true;
      $scope.locations = results;

    });

    $scope.saveSettings = function () {

      //first look at where the settings are stored at originally - item is the ng-repeat in widgets array
      $scope.item.widgetSettings.id = $scope.selectedLocation;

      //must change current scope to parent scope to get out of bootstrap isolated scope
      $scope.$parent.selectedLocation = $scope.selectedLocation;

      $scope.$close();
    }

  }
})();
