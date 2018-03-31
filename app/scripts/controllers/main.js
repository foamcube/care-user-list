'use strict';

/**
 * @ngdoc function
 * @name userListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the userListApp
 */
angular.module('userListApp')
  .controller('MainCtrl', function($scope, UserService, NgMap) {
    $scope.users = UserService.query();
    $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCSAEM9VX9LbxHPTYQEGI_Ja3H6u2TSXXk";
    console.log($scope.users);
  });
