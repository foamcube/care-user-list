'use strict';

/**
 * @ngdoc service
 * @name userListApp.userData
 * @description
 * # userData
 * Service in the userListApp.
 */
angular.module('userListApp')
  .factory('UserService', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
  });
