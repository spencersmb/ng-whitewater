(function() {
	'use strict';

  angular
    .module('wwMenu')
    .directive('wwMenu', wwMenu);

  /** @ngInject */
  function wwMenu(){
    var directive = {
      transclude: true,
      //using isolate scope here
      scope: {

      },
      controller: 'wwMenuCtrl',
      templateUrl: 'app/components/wwMenu/wwMenu-tmpl.html',
      link: function(){

      }
    };

    return directive;
  }
})();
