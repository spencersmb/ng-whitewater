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

          //get the location by passing in the scope.item which we assign in the wwDashboard-directive-tmpl.html
          //then we access the widgetSettings.id set on the object in the wwDashboard.directive.js
          //this location returns a promise so use then method
          dataService.getLocation(scope.item.widgetSettings.id).then(function (results) {
            scope.selectedLocation = results;
            //no settings set to catch if there is an error
          });
        }
      };

      return directive;
    }
	})();
