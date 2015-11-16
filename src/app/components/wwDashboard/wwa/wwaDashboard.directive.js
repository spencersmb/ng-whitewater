(function() {
  'use strict';

  angular.module('ngWhitewater')
    .directive('wwaDashboard', wwaDashboard);

  /** @ngInject */
  function wwaDashboard() {
    var directive = {
      scope: {

      },
      templateUrl: 'app/components/wwDashboard/wwa/wwaDashboard-directive-tmpl.html',
      link:function(scope){
        scope.widgets = [
          {
            sizeX:3,
            sizeY: 1,
            row: 0,
            col:0
          },
          {
            sizeX:3,
            sizeY: 1,
            row: 0,
            col:5
          }
        ]
      }
    };

    return directive;
  }
})();
