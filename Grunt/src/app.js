'use strict';

/**
 * @ngdoc overview
 * @name gruntApp
 * @description
 * # gruntApp
 *
 * Main module of the application.
 */

import Controllers from './controllers/controllers'
import Services from './services/services'

angular
  .module('gruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    Controllers.name,
    Services.name
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
