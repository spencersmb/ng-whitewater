(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .directive('wwaEmp', wwaEmp);

  /** @ngInject */
  function wwaEmp(dataService){
    var directive = {
      templateUrl: 'app/widgets/wwaEmployee/wwaEmp-view.html',
      link: function(scope){

        //get the location by passing in the scope.item which we assign in the wwDashboard-directive-tmpl.html
        //then we access the widgetSettings.id set on the object in the wwDashboard.directive.js
        //this location returns a promise so use then method
        dataService.getEmployee(scope.item.widgetSettings.id).then(function (results) {
          scope.selectedEmployee = results;
          //no settings set to catch if there is an error
        });
      }
    };

    return directive;
  }
})();
