(function() {
	'use strict';

  angular
    .module('ngWhitewater')
    .directive('wwaTemp', wwaTemp);

    /** @ngInject */
    function wwaTemp(dataService){
      var directive = {
        templateUrl: 'app/widgets/wwaTemperature/wwaTemp-view.html',
        link: function(scope){
          scope.isLoaded = false;
          scope.hasError = false;
          scope.selectedLocation = null;
          //get the location by passing in the scope.item which we assign in the wwDashboard-directive-tmpl.html
          //then we access the widgetSettings.id set on the object in the wwDashboard.directive.js
          //this location returns a promise so use then method
          scope.loadLocation = function () {
            scope.hasError = false;

            dataService.getLocation(scope.item.widgetSettings.id).then(function (results) {
              scope.selectedLocation = results;
              scope.isLoaded = true;
              scope.hasError = false;
              //no settings set to catch if there is an error
            },
            function(results){
              scope.hasError = true;
            });
          };

          scope.loadLocation();

        }
      };

      return directive;
    }
	})();
