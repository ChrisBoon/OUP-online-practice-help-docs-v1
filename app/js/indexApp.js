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
      {"name": "Family and Friends KSA 2nd Edition",
       "link": "family_and_friends-ksa.html",
       "imgAsset": "help-doc-icon-faf2e-ksa-2x.jpg"
      },
      {"name": "Super Stars",
       "link": "superstars.html",
       "imgAsset": "help-doc-icon-ss-2x.png"
      },
      {"name": "Shine On!",
       "link": "shine_on.html",
       "imgAsset": "help-doc-icon-so-2x.jpg"
      },
      {"name": "Everybody Up 2nd Edition",
       "link": "everybody-up-2e.html",
       "imgAsset": "help-doc-icon-eu2e-2x.jpg"
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
      {"name": "Smart Choice 3rd Edition: Online Practice",
       "link": "smart-choice.html",
       "imgAsset": "help-doc-icon-sc3e-2x.png"
      },
      {"name": "Smart Choice 3rd Edition: On the Move",
      "link": "smart-choice-otm.html",
      "imgAsset": "help-doc-icon-sc3e-OTM-2x.png"
     },
     {"name": "Smart Talk",
     "link": "smart-talk.html",
     "imgAsset": "help-doc-icon-st-2x.png"
     },
     {"name": "Headway Plus Special Edition",
       "link": "headway-plus-se.html",
       "imgAsset": "help-doc-icon-hpse-2x.jpg"
      },
      {"name": "Headway Academic Skills",
       "link": "headway-academic-skills.html",
       "imgAsset": "help-doc-icon-has-2x.png"
      },
      {"name": "Compass | Explore",
      "link": "ce.html",
      "imgAsset": "help-doc-icon-ce.svg"
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