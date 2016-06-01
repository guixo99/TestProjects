(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * @ngdoc overview
 * @name gruntApp
 * @description
 * # gruntApp
 *
 * Main module of the application.
 */

var _controllers = require('./controllers/controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _services = require('./services/services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('gruntApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', _controllers2.default.name, _services2.default.name]).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  }).otherwise({
    redirectTo: '/'
  });
});

},{"./controllers/controllers":3,"./services/services":6}],2:[function(require,module,exports){
'use strict';

/**
 * @ngdoc function
 * @name gruntApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gruntApp
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AboutCtrl = function AboutCtrl() {
  _classCallCheck(this, AboutCtrl);

  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
};

exports.default = AboutCtrl;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = angular.module('gruntApp.controllers', []).controller('MainCtrl', _main2.default).controller('AboutCtrl', _about2.default);

exports.default = _module;

},{"./about":2,"./main":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('../services/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @ngdoc function
 * @name gruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gruntApp
 */

var MainCtrl =
/*@ngInject*/
function MainCtrl($scope, DataService) {
  _classCallCheck(this, MainCtrl);

  var self = this;
  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  DataService.getData().then(function (d) {
    self.data = d;
    $scope.data = d;
  });
};

exports.default = MainCtrl;

},{"../services/data":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataService = function () {
  /*@ngInject*/

  function DataService($q) {
    _classCallCheck(this, DataService);

    this._$q = $q;
  }

  _createClass(DataService, [{
    key: 'getData',
    value: function getData() {
      return this._$q.when({
        name: 'Guillermo',
        age: '25'
      });
    }
  }]);

  return DataService;
}();

exports.default = DataService;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = angular.module('gruntApp.services', []).service('DataService', _data2.default);

exports.default = _module;

},{"./data":5}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9nLnhvY290emluL0JhYmVsLUV4YW1wbGVzL0dydW50L3NyYy9hcHAuanMiLCIvaG9tZS9nLnhvY290emluL0JhYmVsLUV4YW1wbGVzL0dydW50L3NyYy9jb250cm9sbGVycy9hYm91dC5qcyIsIi9ob21lL2cueG9jb3R6aW4vQmFiZWwtRXhhbXBsZXMvR3J1bnQvc3JjL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzLmpzIiwiL2hvbWUvZy54b2NvdHppbi9CYWJlbC1FeGFtcGxlcy9HcnVudC9zcmMvY29udHJvbGxlcnMvbWFpbi5qcyIsIi9ob21lL2cueG9jb3R6aW4vQmFiZWwtRXhhbXBsZXMvR3J1bnQvc3JjL3NlcnZpY2VzL2RhdGEuanMiLCIvaG9tZS9nLnhvY290emluL0JhYmVsLUV4YW1wbGVzL0dydW50L3NyYy9zZXJ2aWNlcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7OztBQVdBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQ0csTUFESCxDQUNVLFVBRFYsRUFDc0IsQ0FDbEIsV0FEa0IsRUFFbEIsV0FGa0IsRUFHbEIsWUFIa0IsRUFJbEIsU0FKa0IsRUFLbEIsWUFMa0IsRUFNbEIsU0FOa0IsRUFPbEIsc0JBQVksSUFQTSxFQVFsQixtQkFBUyxJQVJTLENBRHRCLEVBV0csTUFYSCxDQVdVLFVBQVUsY0FBVixFQUEwQjtBQUNoQyxpQkFDRyxJQURILENBQ1EsR0FEUixFQUNhO0FBQ1QsaUJBQWEsaUJBREo7QUFFVCxnQkFBWSxVQUZIO0FBR1Qsa0JBQWM7QUFITCxHQURiLEVBTUcsSUFOSCxDQU1RLFFBTlIsRUFNa0I7QUFDZCxpQkFBYSxrQkFEQztBQUVkLGdCQUFZLFdBRkU7QUFHZCxrQkFBYztBQUhBLEdBTmxCLEVBV0csU0FYSCxDQVdhO0FBQ1QsZ0JBQVk7QUFESCxHQVhiO0FBY0QsQ0ExQkg7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7O0lBU3FCLFMsR0FDbkIscUJBQWM7QUFBQTs7QUFDWixPQUFLLGFBQUwsR0FBcUIsQ0FDbkIsbUJBRG1CLEVBRW5CLFdBRm1CLEVBR25CLE9BSG1CLENBQXJCO0FBS0QsQzs7a0JBUGtCLFM7Ozs7Ozs7OztBQ1RyQjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLFVBQVMsUUFBUSxNQUFSLENBQWUsc0JBQWYsRUFBdUMsRUFBdkMsRUFDVixVQURVLENBQ0MsVUFERCxrQkFFVixVQUZVLENBRUMsV0FGRCxrQkFBYjs7a0JBSWUsTzs7O0FDUGY7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0lBU3FCLFE7O0FBRW5CLGtCQUFZLE1BQVosRUFBb0IsV0FBcEIsRUFBaUM7QUFBQTs7QUFDL0IsTUFBSSxPQUFPLElBQVg7QUFDQSxPQUFLLGFBQUwsR0FBcUIsQ0FDbkIsbUJBRG1CLEVBRW5CLFdBRm1CLEVBR25CLE9BSG1CLENBQXJCO0FBS0EsY0FBWSxPQUFaLEdBQXNCLElBQXRCLENBQTJCLFVBQVUsQ0FBVixFQUFhO0FBQ3RDLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxXQUFPLElBQVAsR0FBYyxDQUFkO0FBQ0QsR0FIRDtBQUlELEM7O2tCQWJrQixROzs7Ozs7Ozs7Ozs7O0lDWEEsVzs7O0FBRW5CLHVCQUFZLEVBQVosRUFBZ0I7QUFBQTs7QUFDZCxTQUFLLEdBQUwsR0FBVyxFQUFYO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYztBQUNuQixjQUFNLFdBRGE7QUFFbkIsYUFBSztBQUZjLE9BQWQsQ0FBUDtBQUlEOzs7Ozs7a0JBWGtCLFc7Ozs7Ozs7OztBQ0FyQjs7Ozs7O0FBRUEsSUFBSSxVQUFTLFFBQVEsTUFBUixDQUFlLG1CQUFmLEVBQW9DLEVBQXBDLEVBQ1YsT0FEVSxDQUNGLGFBREUsaUJBQWI7O2tCQUdlLE8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgZ3J1bnRBcHBcbiAqIEBkZXNjcmlwdGlvblxuICogIyBncnVudEFwcFxuICpcbiAqIE1haW4gbW9kdWxlIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuXG5pbXBvcnQgQ29udHJvbGxlcnMgZnJvbSAnLi9jb250cm9sbGVycy9jb250cm9sbGVycydcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzJ1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ2dydW50QXBwJywgW1xuICAgICduZ0FuaW1hdGUnLFxuICAgICduZ0Nvb2tpZXMnLFxuICAgICduZ1Jlc291cmNlJyxcbiAgICAnbmdSb3V0ZScsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICduZ1RvdWNoJyxcbiAgICBDb250cm9sbGVycy5uYW1lLFxuICAgIFNlcnZpY2VzLm5hbWVcbiAgXSlcbiAgLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICAgIH0pXG4gICAgICAud2hlbignL2Fib3V0Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Fib3V0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQWJvdXRDdHJsJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnYWJvdXQnXG4gICAgICB9KVxuICAgICAgLm90aGVyd2lzZSh7XG4gICAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgICAgfSk7XG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgZ3J1bnRBcHAuY29udHJvbGxlcjpBYm91dEN0cmxcbiAqIEBkZXNjcmlwdGlvblxuICogIyBBYm91dEN0cmxcbiAqIENvbnRyb2xsZXIgb2YgdGhlIGdydW50QXBwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0Q3RybCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtcbiAgICAgICdIVE1MNSBCb2lsZXJwbGF0ZScsXG4gICAgICAnQW5ndWxhckpTJyxcbiAgICAgICdLYXJtYSdcbiAgICBdO1xuICB9XG59XG4iLCJpbXBvcnQgTWFpbkN0cmwgZnJvbSAnLi9tYWluJztcbmltcG9ydCBBYm91dEN0cmwgZnJvbSAnLi9hYm91dCc7XG5cbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZ3J1bnRBcHAuY29udHJvbGxlcnMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgTWFpbkN0cmwpXG4gIC5jb250cm9sbGVyKCdBYm91dEN0cmwnLCBBYm91dEN0cmwpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBEYXRhU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhJztcblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIGdydW50QXBwLmNvbnRyb2xsZXI6TWFpbkN0cmxcbiAqIEBkZXNjcmlwdGlvblxuICogIyBNYWluQ3RybFxuICogQ29udHJvbGxlciBvZiB0aGUgZ3J1bnRBcHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkN0cmwge1xuICAvKkBuZ0luamVjdCovXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgRGF0YVNlcnZpY2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gW1xuICAgICAgJ0hUTUw1IEJvaWxlcnBsYXRlJyxcbiAgICAgICdBbmd1bGFySlMnLFxuICAgICAgJ0thcm1hJ1xuICAgIF07XG4gICAgRGF0YVNlcnZpY2UuZ2V0RGF0YSgpLnRoZW4oZnVuY3Rpb24gKGQpIHtcbiAgICAgIHNlbGYuZGF0YSA9IGQ7XG4gICAgICAkc2NvcGUuZGF0YSA9IGQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgLypAbmdJbmplY3QqL1xuICBjb25zdHJ1Y3RvcigkcSkge1xuICAgIHRoaXMuXyRxID0gJHE7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl8kcS53aGVuKHtcbiAgICAgIG5hbWU6ICdHdWlsbGVybW8nLFxuICAgICAgYWdlOiAnMjUnXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRhU2VydmljZSBmcm9tICcuL2RhdGEnO1xuXG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dydW50QXBwLnNlcnZpY2VzJywgW10pXG4gIC5zZXJ2aWNlKCdEYXRhU2VydmljZScsIERhdGFTZXJ2aWNlKVxuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7XG4iXX0=
