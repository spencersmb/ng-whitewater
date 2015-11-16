(function() {
  'use strict';

  angular
    .module('wwMenu')
    .directive('wwMenuItem', wwMenuItem);

  /** @ngInject */
  function wwMenuItem($location){
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

        //Get Url and set active menu on load
        function getUrlState(){
          var currentLoc = $location.path();
          return currentLoc.substr(1);
        }

        angular.forEach(el, function(){
          if($(el).attr('route') === getUrlState()){
            ctrl.setActiveElement(el);
          }
        });


        //another item to keep track of on the item scope - that pulls from the menu ctrler.
        scope.isVertical = function () {
          return ctrl.isVertical;
        };

        //take element and use click event
        el.on('click', function (evt) {
          evt.stopPropagation();
          evt.preventDefault();

          //if menu is open and its not vertical - close the menu on click
          if(ctrl.checkSubMenu() && ctrl.isVertical() !== true){
            ctrl.checkSubMenu().closeMenu();

            //pass in data from this controller to the parent controller and apply it on click
            scope.$apply(function () {
              //these functions are created in the wwMenuCtrl
              ctrl.setActiveElement(el);

              //we must set the route on click and it must be broadcast from the controller
              ctrl.setRoute(scope.route);
            });

            //Else if menu hasnt been clicked navigate like regular
          }else{
            //pass in data from this controller to the parent controller and apply it on click
            scope.$apply(function () {
              //these functions are created in the wwMenuCtrl
              ctrl.setActiveElement(el);

              //we must set the route on click and it must be broadcast from the controller
              ctrl.setRoute(scope.route);
            });
          }

        });
      }
    };

    return directive;
  }
})();
