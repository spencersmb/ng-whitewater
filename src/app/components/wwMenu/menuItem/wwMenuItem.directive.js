(function() {
  'use strict';

  angular
    .module('wwMenu')
    .directive('wwMenuItem', wwMenuItem);

  /** @ngInject */
  function wwMenuItem(){
    var directive = {
      //using isolate scope here
      scope: {
        label:'@',
        route:'@',
        icon:'@'
      },
      //require access use of the wwMenuCtrl through the parent relationship
      require:'^wwMenu',
      templateUrl: 'app/components/wwMenu/menuItem/wwMenuItem-tmpl.html',
      link: function(scope, el, attr, ctrl){
        //take element and use click event
        el.on('click', function (evt) {
          evt.stopPropagation();
          evt.preventDefault();

          //pass in data from this controller to the parent controller and apply it on click
          scope.$apply(function () {
            //these functions are created in the wwMenuCtrl
            ctrl.setActiveElement(el);
            ctrl.setRoute(scope.route);
          });
        });
      }
    };

    return directive;
  }
})();
