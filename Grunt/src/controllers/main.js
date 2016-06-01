'use strict';

import DataService from '../services/data';

/**
 * @ngdoc function
 * @name gruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gruntApp
 */
export default class MainCtrl {
  /*@ngInject*/
  constructor($scope, DataService) {
    var self = this;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    DataService.getData().then(function (d) {
      self.data = d;
      $scope.data = d;
    });
  }
}
