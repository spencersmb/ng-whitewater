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
        //set options in the html tmpl
        scope.gridsterOpts = {
          columns:6,
          maxRows:12,
          pushing:true,
          floating:false,
          swapping:true,
          rowHeight: 200,
          margins:[20, 20],
          outerMargin: true,
          width:'auto',
          colWidth:'auto',
          isMobile:true
        };

        scope.widgetDefinitions = [
          {
            title: 'Temperature',
            settings:{
              sizeX:4,
              sizeY: 2,
              //add directive link here on the object - this is what holds the data
              template: '<wwa-temp></wwa-temp>',
              widgetSettings:{
                id: 1000
              }
            }
          },
          {
            title: 'Employees',
            settings:{
              sizeX:2,
              sizeY: 2,
              //add directive link here on the object - this is what holds the data
              template: '<wwa-emp></wwa-emp>',
              widgetSettings:{
                id: 5001
              }
            }
          },
          {
            title: 'Inventory',
            settings:{
              sizeX:3,
              sizeY: 1,
              template: '<wwa-inv></wwa-inv>',
              widgetSettings:{
                id: 1002
              }
            }
          }
        ];
        //this is the content for each widget
        scope.widgets = [
          {
            sizeX:4,
            sizeY: 2,
            row: 0,
            col:0,
            //add directive link here on the object - this is what holds the data
            template: '<wwa-temp></wwa-temp>',
            widgetSettings:{
              id: 1000
            }
          },
          {
            sizeX:2,
            sizeY: 2,
            row: 0,
            col:6,
            template: '<wwa-emp></wwa-emp>',
            widgetSettings:{
              id: 5001
            }
          },
          {
            sizeX:3,
            sizeY: 1,
            row: 2,
            col:0,
            //add directive link here on the object - this is what holds the data
            template: '<wwa-inv></wwa-inv>',
            widgetSettings:{
              id: 1002
            }
          }
        ];
        scope.title = 'My Dashboard';

      }
    };
    return directive;
  }
})();
