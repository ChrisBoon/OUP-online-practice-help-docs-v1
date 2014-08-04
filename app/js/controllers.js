'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$routeParams', '$http', '$location',
    function ($scope, $routeParams, $http, $location) {

    //note: currentCourse is defined in the head of html file for each course as a global variable.
    //      Getting this programmatically somehow may be better.

    //sets drawer as closed on default
    $scope.openDrawer = {"open":false, "openRight":false};

    //used to set 'active' state on items in the drawer when the corresponding doc is currently displayed.
    $scope.obj = {"value1":$location.path()};

    //not sure this if/else statement is still relevant - consider cutting to just the else part if not used.
    if ( $routeParams.helpmenuId === undefined) {
      $scope.helpmenuId = "primary-welcome";
    }
    else{
      $scope.helpmenuId = $routeParams.helpmenuId;
    }

    //get the json for the required doc
    $http.get('json/' + $scope.helpmenuId + '.json')
      .success(
        function(data) {
          $scope.helpdoc = data;
        }
      )
      //if url of json doesn't resolve for whatever reason, go to the error message page instead
      .error(
        function(data){
          $http.get('json/primary-error.json')
            .success(
              function(data) {
                $scope.helpdoc = data;
              }
            );          
        }
      );
    //get json for toc of course to create menu
    $http.get('json/pagelist-' + currentCourse + '.json').success(function(data) {
      $scope.helpmenu = data;
    });

    //checks localstorage to see if user has picked a language before.
    //If they have we load the page in that language.
    //If not we set the language to English.
    $scope.getLang = function(){

      if (localStorage.getItem("language-" + currentCourse + "") === null) {
        localStorage.setItem("language-" + currentCourse + "","english");
      }
      $scope.language = {"language":localStorage.getItem("language-" + currentCourse + "")};
    };
    //Updates localstorage so we can use getLang next time a user is here.
    $scope.setLang = function(thing){
      localStorage.setItem("language-" + currentCourse + "",thing);
    };
    //gets appLanguages global variable and adds it to scope for use with expressions in html page.
    //note - this is my second globl variable - at the least I should encapsulate these into one object.
    $scope.appLanguages = courseLanguages;
    $scope.courseName = currentCourseTitle;

    //workaround for touch bug
    $scope.go = function ( path ) {
      $location.path( path );
    };

  }])

  .controller('MyCtrl2', ['$scope',
    //scoped controller runs on each 'page' in a help doc to set which number is set as 'active' 
    function ($scope) {
      //by default no item should be active. In html file the click statement will update this number.
      $scope.focus = {"focussed":0};

      //function to position the numbers on the image. Usin g expressions directly in the style tag doesn't work in IE9 so have to run a function instead.
      $scope.itemStyle = function (para) {
        return { top: para.numberPosTop + '%', left: para.numberPosLeft + '%' };
      };
  }])


;