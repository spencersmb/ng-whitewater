(function() {
  'use strict';

  angular
    .module('wwMenu')
    .controller('wwMenuCtrl', wwMenuCtrl);

  /** @ngInject */
  function wwMenuCtrl($scope, $rootScope){
    var vm = this;

    //$scope.showMenu = true;

    //keep track of which menu item is the active item
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

    //listen for the menu broadcast
    $scope.$on('wwMenu-show', function (evt, data) {
      //real routing happens here
      //temp store string in variable
      $scope.showMenu = data.show;

    });
  }
})();
