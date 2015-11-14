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
      link: function(scope, el, attr){

        scope.isOpen = false;

        scope.closeMenu = function () {
          scope.isOpen = false;
        };

        scope.clicked = function () {
          scope.isOpen = !scope.isOpen;
        };

      }
    };

    return directive;
  }

})();
