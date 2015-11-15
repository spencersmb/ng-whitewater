(function() {
  'use strict';

	angular.module('wwMenu')
         .directive('wwMenuGroup', wwMenuGroup);

  /** @ngInject */
  function wwMenuGroup(){
    var directive = {
      transclude:true,
      //require access use of the wwMenuCtrl through the parent relationship
      require:'^wwMenu',
      scope:{
        label:'@',
        icon:'@'
      },
      templateUrl:'app/components/wwMenu/menuGroup/wwMenuGroup-tmpl.html',
      link: function(scope, el, attr, ctrl){

        scope.isOpen = false;

        scope.closeMenu = function () {
          scope.isOpen = false;
        };

        scope.clicked = function () {
          scope.isOpen = !scope.isOpen;

          //by passing in scope we give the ctrl access to scope.closemenu function
          ctrl.setOpenMenu(scope);
        };

        //another item to keep track of on the item scope - that pulls from the menu ctrler.
        scope.isVertical = function () {
          return ctrl.isVertical;
        };

      }
    };

    return directive;
  }

})();
