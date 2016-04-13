'use strict';
// Declare app level module which depends on filters, and services
angular.module('helpIndex', [
  'ngAnimate',
  'helpIndex.controllers'
]);

/* Controllers */
angular.module('helpIndex.controllers', [])
.controller('helpIndexCtrl1', ['$scope',
  function ($scope) {
      $scope.search = {
        "open": false
      };
      $scope.courses = [
      {"name": "Explorers",
       "link": "explorers.html",
       "imgAsset": "help-doc-icon-exp-2x.png"
      },
      {"name": "Oxford Discover",
       "link": "discover.html",
       "imgAsset": "help-doc-icon-od-2x.png"
      },
      {"name": "Family and Friends 2nd Edition",
       "link": "family_and_friends.html",
       "imgAsset": "help-doc-icon-faf2e-2x.png"
      },
      {"name": "American Family and Friends 2nd Edition",
       "link": "americanfamilyandfriends.html",
       "imgAsset": "help-doc-icon-afaf2e-2x.png"
      },
      {"name": "Super Stars",
       "link": "superstars.html",
       "imgAsset": "help-doc-icon-ss-2x.png"
      },
      {"name": "Shine On!",
       "link": "shine_on.html",
       "imgAsset": "help-doc-icon-so-2x.jpg"
      },
      {"name": "Teen2Teen Plus",
       "link": "teen2teen_plus.html",
       "imgAsset": "help-doc-icon-t2t-2x.jpg"
      },
      {"name": "Engage Special Edition",
       "link": "engage.html",
       "imgAsset": "help-doc-icon-eng-2x.jpg"
      },
      {"name": "Elements of Success",
       "link": "elements.html",
       "imgAsset": "help-doc-icon-eos-2x.png"
      },
      {"name": "Q: Skills for Success 2nd Edition",
       "link": "q2e.html",
       "imgAsset": "help-doc-icon-q2e-2x.png"
      },
      {"name": "Q: Skills for Success 2nd Edition - Special Edition",
       "link": "q2e-se.html",
       "imgAsset": "help-doc-icon-q2e-se-2x.jpg"
      },
      {"name": "Inside Listening & Speaking: Digital Download Center",
       "link": "inside-ls.html",
       "imgAsset": "help-doc-icon-ils-2x.png"
      },
      {"name": "Generic Primary: all languages",
       "link": "master-primary.html",
       "imgAsset": "help-doc-icon-primary-2x.png"
      },
      {"name": "Generic Adult: all languages",
       "link": "master-adult.html",
       "imgAsset": "help-doc-icon-adult-2x.png"
      }

    ];
  }
]);