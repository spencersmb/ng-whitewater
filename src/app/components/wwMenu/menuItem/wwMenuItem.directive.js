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

        //function on the nav items in if statement
        //we keep track of the is active item in the main controller - since we dont have access to the ctrl's scope
        //so we create a new function to get the active element from the controller
        scope.isActive = function () {
          return el === ctrl.getActiveElement();
        };

        //another item to keep track of on the item scope - that pulls from the menu ctrler.
        scope.isVertical = function () {
          console.log(ctrl.isVertical);

          return ctrl.isVertical;
        };

        //take element and use click event
        el.on('click', function (evt) {
          evt.stopPropagation();
          evt.preventDefault();

          console.log(ctrl.isVertical());

          if(ctrl.checkSubMenu && ctrl.isVertical() != true){
            console.log('open');
            ctrl.checkSubMenu().closeMenu();
          }
          console.log();
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
