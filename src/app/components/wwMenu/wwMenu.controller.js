(function() {
  'use strict';

  angular
    .module('wwMenu')
    .controller('wwMenuCtrl', wwMenuCtrl);

  /** @ngInject */
  function wwMenuCtrl($scope, $rootScope){
    var vm = this;

    //keep track of which menu item is the active item
    //Set active item on click for the getActiveelement to retrieve it
    //This is so the directive can communicate back and fourth with the controller and the view state basically
    vm.setActiveElement = function (el) {
      $scope.activeElement = el;
    };

    //function to send the active element back to another controller or directive
    //currently getting sent to the wwMenu-item directive
    vm.getActiveElement = function () {
      return $scope.activeElement;
    };

    //this boadcasts the event - and we listen for the event in the framework main ctrl
    vm.setRoute = function (route) {
      //give the event a unique name
      $rootScope.$broadcast('ww-menu-item-selected-event',
        {route: route}
      );
    };

    vm.isVertical = function () {
      return $scope.isVertical;
    };

    //If horizontal menu btn is clicked openMenu gets set
    vm.setOpenMenu = function (scope) {
      $scope.openMenu = scope;
      $scope.subMenuOpen = true;
    };

    vm.checkSubMenu = function(){
      return $scope.openMenu;
    };

    //listen for the menu broadcast from the main ctrl
    $scope.$on('wwMenu-show', function (evt, data) {
      //real routing happens here
      //temp store string in variable
      $scope.showMenu = data.show;

    });

    $scope.isVertical = true;

    //Horizontal btn
    $scope.toggleMenuHorizontal = function () {
      //check if a submenu is open - close it using the child-directive scope function
      if($scope.openMenu){
        $scope.openMenu.closeMenu();
      }
      $scope.isVertical = !$scope.isVertical;

      //must let main framework know the orientation has changed
      $rootScope.$broadcast('ww-menu-orientation-changed-event',
        {isMenuVertical: $scope.isVertical}
      );
    };

    //on document bind a click function to close menu if its horizontal
    angular.element(document).bind('click', function (e) {
      //***Note that if you use jquery - you will need to call $apply to make sure the changes get propigated
      //if menu is open and menu is vertical close
      if($scope.openMenu && !$scope.isVertical){

        if($(e.target).parent().next().hasClass('active-add')){
          //do nothing
        }else{
          $scope.$apply(function () {
            $scope.openMenu.closeMenu();
          });
        }

      }
    });

  }
})();
