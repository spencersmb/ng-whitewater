(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .controller('wwFrameworkCtrl', wwFrameworkCtrl);

  /** @ngInject */
  function wwFrameworkCtrl($scope) {
    var vm = this;

    //listen for the route message
    $scope.$on('ww-menu-item-selected-event', function (evt, data) {
      //real routing happens here
      //temp store string in variable
      $scope.routeString = data.route;
    });

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
