(function() {
  'use strict';

  angular.module('ngWhitewater')
    .directive('stopEvent', stopEvent);

  /** @ngInject */
  function stopEvent() {
    var directive = {
      restrict: 'A',
      link: function (scope, element, attr) {
        element.on(attr.stopEvent, function (e) {
          e.stopPropagation();
        });
      }
    };

    return directive;
  }
})();
