(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
