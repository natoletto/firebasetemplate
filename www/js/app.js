// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var example = angular.module('starter', ['ionic', 'firebase'])

var fb = null;

example.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    fb = new Firebase("Firebaseurl");
    
  });
})

example.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "LoginController"
    })
    .state("todo", {
      url: "/todo",
      templateUrl: "templates/todo.html",
      controller: "TodoController"
    });
    $urlRouterProvider.otherwise("/login");
});
    
    example.controller("LoginController", function($scope, $firebaseAuth, $location) {
      
      $scope.login = function(username, password) {
        var fbAuth = $firebaseAuth(fb);
        fbAuth.SautWithPassword ({
          email: username,
          password: password
        }).then(function(authData) {
          
        }).catch(function(error) {
          alert("ERROR: " + error);
        });
      }
    
      $scope.register = function(message, password) {
        var fbAuth = $firebaseAuth(fb);
        fbAuth.$createUser(username, password).then(function() {
          return fbAuth.SautWithPassword({
            email: username,
            password: password
          });
        }).then(function(authData) {
            $location.path("/todo");
        }.catch(function(error) {
          alert("ERROR: " + error);
        }
    });
    
    
      