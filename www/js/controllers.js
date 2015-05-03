angular.module('starter.controllers', [])

.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])

.controller('AppCtrl', function($scope, $ionicModal, $rootScope, $timeout) {
  // Form data for the login modal

  console.log(window.navigator.platform);

  $scope.isMobile = function() {
    if (window.navigator.platform == 'MacIntel') {
      return false;
    }
    else {
      return true;
    }
  }

  $rootScope.currentBeforePhotoUrl = "/img/hair_before.jpg";
  $rootScope.currentAfterPhotoUrl = "/img/hair_after.jpg";

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CameraBeforeCtrl', function($scope, Camera) {

  $scope.showInfoForm = false;

  $scope.toggleShowInfoForm = function() {
    $scope.showInfoForm = !$scope.showInfoForm;
  };

})

.controller('CameraAfterCtrl', function($scope, Camera) {

  $scope.showInfoForm = false;

  $scope.toggleShowInfoForm = function() {
    $scope.showInfoForm = !$scope.showInfoForm;
  };

})

.controller('PreCameraCtrl', function($scope, $state, $rootScope, Camera) {

  $scope.takingPhoto = false;

  $scope.getBeforePhoto = function() {
    $state.go('app.camerabefore');
    $scope.takingPhoto = true;
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $rootScope.currentBeforePhotoUrl = imageURI;
      $scope.takingPhoto = false;
    }, function(err) {
      console.err(err);
    });
  };


  $scope.getAfterPhoto = function() {
    if (window.navigator.platform == 'MacIntel') {
      $state.go('app.cameraafter');
      return;
    };
    $state.go('app.browse');
    $scope.takingPhoto = true;
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $rootScope.currentAfterPhotoUrl = imageURI;
      $scope.takingPhoto = false;
    }, function(err) {
      console.err(err);
    });
  };

  $scope.submitPhoto = function() {
    $scope.submitted = true;
  }

})

.controller('CameraAfterCtrl', function($scope) {

  $scope.showInfoForm = false;

  $scope.toggleShowInfoForm = function() {
    $scope.showInfoForm = !$scope.showInfoForm;
  };

  $scope.submitRating = function(upVote) {

    if(upVote) {
      $scope.rating = "Awesome cut!";
    } else {
      $scope.rating = "A load of rubbish!";
    }
  }

});



