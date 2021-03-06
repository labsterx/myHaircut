// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.precamera', {
    url: "/precamera",
    views: {
      'menuContent': {
        templateUrl: "templates/precamera.html",
        controller: "PreCameraCtrl"
      }
    }
  })

  .state('app.camerabefore', {
    url: "/camerabefore",
    views: {
      'menuContent': {
        templateUrl: "templates/camerabefore.html",
        controller: "CameraBeforeCtrl"
      }
    }
  })

  .state('app.duringhaircut', {
    url: "/duringhaircut",
    views: {
      'menuContent': {
        templateUrl: "templates/duringhaircut.html",
        controller: "PreCameraCtrl"
      }
    }
  })

  .state('app.cameraafter', {
    url: "/cameraafter",
    views: {
      'menuContent': {
        templateUrl: "templates/cameraafter.html",
        controller: "CameraAfterCtrl"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })


  .state('app.historydetail', {
    url: "/historydetail",
    views: {
      'menuContent': {
        templateUrl: "templates/historydetail.html"
      }
    }
  })

  .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
