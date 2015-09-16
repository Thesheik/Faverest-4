'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('FavoritesCtrl', function (
    $scope,
    Favorite
  ) {
    $scope.favorites = Favorite.getList().$object;
  });
