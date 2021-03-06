    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    // 'starter.controllers' is found in controllers.js
    angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput','lbServices','ngResource', 'ngCordova', 'ngCordova.plugins.media2'])

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

.config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
   // LoopBackResourceProvider.setUrlBase('http://192.168.1.12:3000/api');
  })


    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);

        /*
        // Turn off back button text
        $ionicConfigProvider.backButton.previousTitleText(false);
        */

        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.activity', {
            url: '/activity',
            views: {
                'menuContent': {
                    templateUrl: 'templates/activity.html',
                    controller: 'ActivityCtrl'
                },
                /*'fabContent': {
                    template: '<button id="fab-activity" class="button button-fab button-fab-top-left"><i class="icon ion-ios-arrow-back"></i></button>',
                    controller: function ($timeout) {
                        $timeout(function () {
                            document.getElementById('fab-activity').classList.toggle('on');
                        }, 200);
                    }
                }*/
            }
        })

        .state('app.dj', {
            url: '/dj',
            views: {
                'menuContent': {
                    templateUrl: 'templates/dj.html',
                    controller: 'DjCtrl'
                },
                /*'fabContent': {
                    template: '<button id="fab-dj" class="button button-fab button-fab-top-left"><i class="icon ion-ios-arrow-back"></i></button>',
                    controller: function ($timeout) {
                        $timeout(function () {
                            document.getElementById('fab-dj').classList.toggle('on');
                        }, 900);
                    }
                }*/
            }
        })

        .state('app.music', {
            url: '/music',
            views: {
                'menuContent': {
                    templateUrl: 'templates/music.html',
                    controller: 'MusicCtrl'
                },
                /*'fabContent': {
                    template: '<button id="fab-dj" class="button button-fab button-fab-top-left"><i class="icon ion-ios-arrow-back"></i></button>',
                    controller: function ($timeout) {
                        $timeout(function () {
                            document.getElementById('fab-dj').classList.toggle('on');
                        }, 900);
                    }
                }*/
            }
        })

        .state('app.beritaterbaru', {
            url: '/beritaterbaru',
            views: {
                'menuContent': {
                    templateUrl: 'templates/berita-terbaru.html',
                    controller: 'BeritaTerbaruCtrl'
                },
                /*'fabContent': {
                    template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                    controller: function ($timeout) {
                        $timeout(function () {
                            document.getElementById('fab-gallery').classList.toggle('on');
                        }, 600);
                    }
                }*/
            }
        })

        .state('app.beritaterpopuler', {
            url: '/beritaterpopuler',
            views: {
                'menuContent': {
                    templateUrl: 'templates/berita-terpopuler.html',
                    controller: 'BeritaTerpopulerCtrl'
                },
                /*'fabContent': {
                    template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                    controller: function ($timeout) {
                        $timeout(function () {
                            document.getElementById('fab-gallery').classList.toggle('on');
                        }, 600);
                    }
                }*/
            }
        })

        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                },
                'fabContent': {
                    template: ''
                }
            }
        })

        .state('app.signup', {
            url: '/signup',
            views: {
                'menuContent': {
                    templateUrl: 'templates/signup.html',
                    controller: 'SignupCtrl'
                },
                'fabContent': {
                    template: ''
                }
            }
        })

        .state('app.loginscreen', {
            url: '/loginscreen',
            views: {
                'menuContent': {
                    templateUrl: 'templates/loginscreen.html',
                    controller: 'LoginscreenCtrl'
                },
                'fabContent': {
                    template: ''
                }
            }
        })

        .state('app.radio', {
            url: '/radio',
            views: {
                'menuContent': {
                    templateUrl: 'templates/radio.html',
                    controller: 'RadioCtrl'
                },
                /*'fabContent': {
                    template: '<button id="fab-rundowne" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                    controller: function ($timeout) {
                        $timeout(function () {
                            document.getElementById('fab-profile').classList.toggle('on');
                        }, 800);
                    }
                }*/
            }
        })
        .state('app.quisoner', {
            url: '/quisoner',
            views: {
                'menuContent': {
                    templateUrl: 'templates/quisoner.html',
                    controller: 'QuisonerCtrl'
                },
            }
        })

        .state('app.programradio', {
            url: '/programradio',
            views: {
                'menuContent': {
                    templateUrl: 'templates/programradio.html',
                    controller: 'ProgamradioCtrl'
                },
            }
        })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/loginscreen');
    });
