/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function(User, $ionicPopup, $scope, $ionicModal, $ionicPopover, $timeout, $location, $ionicLoading,$cordovaMedia2) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    //Function Play
    document.addEventListener("deviceready", function() {
                media = $cordovaMedia2.newMedia('http://stream.suararadio.com:8000/bandung_klitefm_mp3');
            }, false);

            $scope.playSomething = function() {
                 media.play().then(function() {
                     // success
                     console.log('finished playback');
                 }, null, function(data) {
                     console.log('track progress: ' + data.position);

                     if (data.status) {
                         console.log('track status change: ' + data.status);
                     }
                     if (data.duration) {
                         console.log('track duration: ' + data.duration);
                     }
                 });
            };

    $scope.play = function () {
              var src = "audio/music.mp3";
              var media = $cordovaMedia.newMedia(src).then(function() {
                  media.play();
              }, function () {
                  // error
              });
         }

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    //Go Back Function//

    $scope.myGoBack = function(){
    $ionicHistory.goBack();
  };

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };

    /////////////////////////API LOGIN ///////////////////////////////////////////////////

 $scope.credentials = {};
 $scope.login = function() {
    console.log($scope.credentials);
    $scope.loginResult = User.login({ rememberMe: $scope.rememberMe },$scope.credentials,
      function(data) {
           $scope.rememberMe = data;
           $scope.userId = data.userId;
           $location.path("/app/radio");
        // success
         console.log(data);

       // console.log('success',data);
      }, function(res) {
        // error
        console.log('error',res);
      }).$promise.then(function(){

      //$scope.getuserprofile();
  })
  };


//////////////////////////////


})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

})

.controller('SignupCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();
})

/*app.controller('customersCtrl', function($scope, $http) {

    $http.get("http://localhost/que/query.php")
	.success(function (response) {$scope.names = response.records;});
});*/

.controller('LoginscreenCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('DjCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('MusicCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');



    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
          selector: '.animate-fade-slide-in .item'
         });
    }, 1000);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})


.controller('RadioCtrl', function(Radio, $scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    /*$scope.$parent.clearFabs();*/
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    /*$scope.$parent.setHeaderFab(false);*/
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);

    $scope.myGoBack = function(){
    $ionicHistory.goBack();
  }

  ////API GET RADIO PROGRAM
  Radio.programs({ id: '000197' })
    .$promise.then(function($data){
        $scope.program = $data;
        console.log($data);
        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
              selector: '.animate-fade-slide-in .item'
             });
        }, 1000);
    });

      //call API radio
     //$scope.Radio = "http://apibeta.svara.id:3000/api/radios?access_token=RFp9NRiaNmQ3Md9wjwntSSwnwnqzG8TfLezS2tQ0xFEBc7YdtgnNgodHEP5K77nG";

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
    // Set Ink
    ionicMaterialInk.displayEffect();

    // set play streaming
    /*$scope.play = function(src){
      var media = new Media(src, nul nul, mediaStatusCallback);
      $cordova.play(media);
    }
    var mediaStatusCallback = function(status) {
      if (status== media.MEDIA_STARTING{
        $ionicloading.show{template: "Loading....."});
      }else {
        $ionicloading.hide();
      }
    }*/
})

.controller('ActivityCtrl', function( $http, $scope, $ionicPopup, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

//GET RUNDOWN
  $http.get('http://apibeta.svara.id:3000/api/radios/000018/crawlrundowns?access_token=4vFCdZXZWaSXYxWb39SeqjOiqOjoDSBTyY8D0AWHh1qZHpvx934KRBgCXjfDsM7k')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data); // for browser console
      $scope.rundown = data; // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      //things = result.data;
    });

    // Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};


  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('ProgamradioCtrl', function($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};


  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('BeritaTerbaruCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
})
.controller('BeritaTerpopulerCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
})

.controller('QuisonerCtrl', function($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $http) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    //http POST
    $scope.penyiar = {};

   $scope.simpan = function(){
     console.log("ambil", $scope.penyiar.tema, "ambil 2", $scope.penyiar.waktu);
       var link = "http://localhost/adit/addInteraksi.php";

       $http.post(link, {tema : $scope.penyiar.tema, waktu : $scope.penyiar.waktu}).then(function (res){
           $scope.response = res.data;
           console.log("apa kata", $scope.response);
       });
   };

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};


  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})
