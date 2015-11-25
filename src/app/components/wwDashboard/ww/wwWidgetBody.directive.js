(function() {
  'use strict';

  angular.module('wwDashboard')
    .directive('wwWidgetBody', wwWidgetBody);

  /** @ngInject */
  function wwWidgetBody($compile) {
    //add compile to get all the widget contents in the link function
    var directive = {
      //this directive will inherit scope from parent directive instead of using isolate scope
      //so you can use the scope of wwDashboard to get data from
      templateUrl: 'app/components/wwDashboard/ww/wwWidgetBody-tmpl.html',
      link: function (scope, element) {

        //This dynamically gets the widget directive and compiles it in html for us
        //Get the element to compile
        //we use scope.item because item is what we define in the wwdashboard-direcitve-view html file
        //calling angular.element will compile it into its own element
        var newElement = angular.element(scope.item.template);

        //append this newElement to the element which is the widgetbody html tag
        element.append(newElement);

        //compile to make sure angular knows about it because jquery doesnt tell angular something new is there
        //element, then scope you want to link to
        $compile(newElement)(scope);

        //function is placed here because it inherits the parent scope which is where we loop over each widget using ng-repeat
        //and assign item in widgets in wwDashboard-directive-tmpl.html
        scope.close = function(){

          //splice the indexOf the current item clicked
          scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
        };
      }
    };

    return directive;
  }
})();
