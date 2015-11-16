(function() {
  'use strict';

  angular
    .module('ngWhitewater')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/dashboard').otherwise('/dashboard');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'wwFrameworkCtrl',
        controllerAs: 'main'
      })
      .state('home.dashboard', {
        url: 'dashboard',
        templateUrl: 'app/components/wwDashboard/view/wwaDashboard-view-tmpl.html'
      })
      .state('home.locations', {
        url: 'locations',
        templateUrl: 'app/components/wwLocations/wwLocations-tmpl.html'
      })
      .state('home.guides', {
        url: 'guides',
        templateUrl: 'app/components/wwGuides/wwGuides-tmpl.html'
      });

  }

})();
