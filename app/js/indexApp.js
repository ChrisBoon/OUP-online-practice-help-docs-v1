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
      {"name": "Teen2Teen Plus",
       "link": "teen2teen_plus.html",
       "imgAsset": "help-doc-icon-t2t-2x.jpg"
      },
      {"name": "Engage",
       "link": "engage.html",
       "imgAsset": "help-doc-icon-eng-2x.jpg"
      },
      {"name": "Elements of Success",
       "link": "elements.html",
       "imgAsset": "help-doc-icon-eos-2x.png"
      },
      {"name": "Q: Skills for Success",
       "link": "q2e.html",
       "imgAsset": "help-doc-icon-q2e-2x.png"
      }
    ];



    $scope.allCourses = {
      "segment": [
        {
          "title": "Primary",
          "courses": [
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
            }
          ]
        },
        {
          "title": "Secondary",
          "courses": [
            {"name": "Teen2Teen Plus",
             "link": "teen2teen.html",
             "imgAsset": "help-doc-icon-t2t-2x.png"
            }
          ]
        },
        {
          "title": "Adult",
          "courses": [
            {"name": "Elements of Success",
             "link": "elements.html",
             "imgAsset": "help-doc-icon-eos-2x.png"
            },
            {"name": "Q: Skills for Success",
             "link": "q2e.html",
             "imgAsset": "help-doc-icon-q2e-2x.png"
            }
          ]
        }
      ]

    };
  }
]);