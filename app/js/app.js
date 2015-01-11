'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'myApp.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Spanish', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Arabic', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Japanese', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Korean', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Portuguese', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Vietnamese', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Thai', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Chinese', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/_Turkish', {templateUrl: 'partials/welcome-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/faq', {templateUrl: 'partials/faq-'+ opHelpGlobals.config.homePage +'.html', controller: 'MyCtrl1'});
  $routeProvider.when('/:helpmenuId', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);