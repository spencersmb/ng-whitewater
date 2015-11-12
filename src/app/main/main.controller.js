(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .controller('wwFrameworkCtrl', wwFrameworkCtrl);

  /** @ngInject */
  function wwFrameworkCtrl($scope, $window, $rootScope) {
    var vm = this;

    //listen for the route message coming - this one happens to come from the wwMenu controller
    $scope.$on('ww-menu-item-selected-event', function (evt, data) {
      //real routing happens here
      //temp store string in variable
      $scope.routeString = data.route;

      //hide menu on url route click for mobile
      checkWidth();
      broadcastMenuState();
    });

    //Resize event for framework
    //we add an event name to the resize event - ngWhitewater
    $($window).on('resize.ngWhitewater', function(){
      $scope.$apply(function(){
        //do check width to reset variables
        //then call the menuState to check if menu should be on or not
        checkWidth();
        broadcastMenuState();
      });
    });

    $scope.$on("$destroy", function () {
      //this somehow is called when check width is false or something not sure
      console.log('off called');
      $($window).off("resize.ngWhitewater");
    });

    var checkWidth = function(){

      //checks for scroll bar and returns the largest number
      var width = Math.max($($window).width(), $window.innerWidth);

      //Show main menu on desktop screens
      $scope.isMenuVisible = ( width >= 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;

    };

    $scope.menuButtonClicked = function (){

      //open and close for menu showing the opposite of whatever it is
      $scope.isMenuVisible = !$scope.isMenuVisible;

      //communicate back to the wwMenu ctrl broadcasting on rootScope
      broadcastMenuState();

    };

    var broadcastMenuState = function () {

      //Set the show property to the scope variable - isMenuVisible
      //data.show when you using the $on event.
      $rootScope.$broadcast('wwMenu-show', {
        show:$scope.isMenuVisible
      });
    };

    //call when page first loads
    checkWidth();
    //Simple timeout function to call as soon as page loads
    //$timeout(function () {
    //  checkWidth();
    //},0);

    //inject $timeout, webDevTec, toastr
    //vm.awesomeThings = [];
    //vm.classAnimation = '';
    //vm.creationDate = 1447121911104;
    //vm.showToastr = showToastr;
    //
    //activate();
    //
    //function activate() {
    //  getWebDevTec();
    //  $timeout(function() {
    //    vm.classAnimation = 'rubberBand';
    //  }, 4000);
    //}
    //
    //function showToastr() {
    //  toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //  vm.classAnimation = '';
    //}
    //
    //function getWebDevTec() {
    //  vm.awesomeThings = webDevTec.getTec();
    //
    //  angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //    awesomeThing.rank = Math.random();
    //  });
    //}
  }
})();
