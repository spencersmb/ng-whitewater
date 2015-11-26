(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .directive('wwaInv', wwaInv);

  /** @ngInject */
  function wwaInv(dataService){
    var directive = {
      templateUrl: 'app/widgets/wwaInventory/wwaInv-view.html',
      link: function(scope){
        scope.isLoaded = false;
        scope.selectedLocation = null;
        //get the location by passing in the scope.item which we assign in the wwDashboard-directive-tmpl.html
        //then we access the widgetSettings.id set on the object in the wwDashboard.directive.js
        //this location returns a promise so use then method
        dataService.getLocation(scope.item.widgetSettings.id).then(function (results) {
          scope.selectedLocation = results;
          scope.isLoaded = true;
          //no settings set to catch if there is an error
        });
      }
    };

    return directive;
  }
})();
