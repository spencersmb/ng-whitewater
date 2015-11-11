(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $provide) {
    // Enable log
    $logProvider.debugEnabled(true);

    //enable exception handeling
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
      return function (exception, cause) {
        $delegate(exception, cause);
        alert(exception.message);
      };
    }]);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
