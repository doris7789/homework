'use strict';

/**
 * @ngdoc overview
 * @name jsHomework0806App
 * @description
 * # jsHomework0806App
 *
 * Main module of the application.
 */
angular
  .module('jsHomework0806App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/0806homework.html',
        controller: '0806homeworkCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
