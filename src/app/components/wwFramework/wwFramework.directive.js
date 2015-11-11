(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    //directive name is the same and gets converted in html <ww-framework>
    .directive('wwFramework', wwFramework);

  /** @ngInject */
  function wwFramework() {
    var directive = {
      transclude: true,
      scope: {
        //Bind a string onetime - use @
        //snake case in the html for iconFile -> icon-file
        title: '@',
        subtitle:'@',
        iconFile:'@'
      },
      controller: 'wwFrameworkCtrl',
      templateUrl: 'app/components/wwFramework/wwFramework-tmpl.html'
    };

    return directive;
  }

})();
