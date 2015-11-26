(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .controller('wwaSelectEmployeeCtrl', wwaSelectEmployeeCtrl);

  /** @ngInject */
  function wwaSelectEmployeeCtrl($scope, dataService){
    var vm = this;
    $scope.isLoaded = false;

    dataService.getEmployees().then(function (results) {
      $scope.employees = results;
      $scope.isLoaded = true;

      //loop through the data and make sure the current item is set on ng-modal initially
      for(var i=0;i< results.length;i++){
        if(results[i] === $scope.item.widgetSettings.id){
          //selected employee is ng-model on the select box, but its also on the scope of the widget directive as the assigned scope variable to hold that data the is showing in the current widget
          $scope.selectedEmployee = results[i];
        }
      }

      $scope.saveSettings = function(){
        $scope.item.widgetSettings.id = $scope.selectedEmployee.id;
        //because we are on the modal - we need to go up one level to the wwaEmpDirective that acutally sets the data on the widget and change the data there to this new scope.
        //Ui bootstrap creates its own isolated scope so we have to look up one level for our datas scope
        $scope.$parent.selectedEmployee = $scope.selectedEmployee;

        //call close on the modal, not the widget
        $scope.$close();
      };

    });

  }
})();
