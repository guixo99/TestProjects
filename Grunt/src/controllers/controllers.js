import MainCtrl from './main';
import AboutCtrl from './about';

var module = angular.module('gruntApp.controllers', [])
  .controller('MainCtrl', MainCtrl)
  .controller('AboutCtrl', AboutCtrl);

export default module;
