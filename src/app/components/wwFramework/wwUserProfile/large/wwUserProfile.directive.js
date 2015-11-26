(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    //directive name is the same and gets converted in html <ww-framework>
    .directive('wwUserProfile', wwUserProfile);

  /** @ngInject */
  function wwUserProfile() {
    var directive = {
      templateUrl: 'app/components/wwFramework/wwUserProfile/large/wwUserProfile-view.html'
    };

    return directive;
  }

})();
