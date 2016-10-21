angular.module('characterApp')
       .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
          templateUrl: 'views/index.html',
        }).when('/gabumon', {
          templateUrl: 'views/gabumon.html',
        }).when('/gatomon', {
          templateUrl: 'views/gatomon.html',
        }).when('/leomon', {
          templateUrl: 'views/leomon.html',
        });

        $locationProvider.html5Mode(true);
      });
