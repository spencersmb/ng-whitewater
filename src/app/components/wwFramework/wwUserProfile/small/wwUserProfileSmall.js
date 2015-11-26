(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    //directive name is the same and gets converted in html <ww-framework>
    .directive('wwUserProfileSmall', wwUserProfileSmall);

  /** @ngInject */
  function wwUserProfileSmall() {
    var directive = {
      templateUrl: 'app/components/wwFramework/wwUserProfile/small/wwUserProfileSmall-view.html'
    };

    return directive;
  }

})();
