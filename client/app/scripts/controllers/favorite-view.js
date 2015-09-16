'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FavoriteViewCtrl
 * @description
 * # FavoriteViewCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
.controller('FavoriteViewCtrl', function (
  $scope,
  $routeParams,
  Favorite
) {
  $scope.viewFavorite = true;
  $scope.favorite = Favorite.one($routeParams.id).get().$object;
});
