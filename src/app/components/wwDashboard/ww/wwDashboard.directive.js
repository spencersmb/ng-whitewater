(function() {
	'use strict';

  angular.module('wwDashboard')
         .directive('wwDashboard', wwDashboard);

  /** @ngInject */
  function wwDashboard() {
    var directive = {
      //this directive will inherit scope from parent directive instead of using isolate scope
     //the scope it will inherit will be from the wwDashboard module?
      templateUrl: 'app/components/wwDashboard/ww/wwDashboard-directive-tmpl.html',
      link:function(scope){
        scope.addNewWidget = function (widget) {

          //make a duplicate of our widget settings object
          var newWidget = angular.copy(widget.settings);

          //scope already has widget property on scope using ng-repeat
          scope.widgets.push(newWidget);
        };
      }
    };

    return directive;
  }
	})();
