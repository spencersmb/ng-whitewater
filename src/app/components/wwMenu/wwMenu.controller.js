(function() {
  'use strict';

  angular
    .module('wwMenu')
    .controller('wwMenuCtrl', wwMenuCtrl);

  /** @ngInject */
  function wwMenuCtrl($scope, $rootScope){
    var vm = this;

    //keep track of which menu item is the active item
    vm.setActiveElement = function (el) {
      $scope.activeElement = el;
    };

    //this boadcasts the event - and we listen for the event in the framework main ctrl
    vm.setRoute = function (route) {
      //give the event a unique name
      $rootScope.$broadcast('ww-menu-item-selected-event',
        {route: route}
      );
    }
  }
})();
