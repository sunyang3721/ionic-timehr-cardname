angular.module('timehr', ['ionic','timehr.JobCtrl'])
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-back');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-back');  

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url:"/home/:pid",
      controller:"timehrCtrl",
      templateUrl: "home.html"
    })
    .state("joblist", {
      url:"/joblist/:id",
      controller:"joblistCtrl",
      templateUrl: "joblist.html"
    })
    
// $urlRouterProvider.otherwise("/jobs/home");
});

