'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FavoriteAddCtrl
 * @description
 * # FavoriteAddCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('FavoriteAddCtrl', function (
  $scope,
  $routeParams,
  Favorite,
  $location
) {
  $scope.favorite = {};
  $scope.saveFavorite = function() {
    Favorite.post($scope.favorite).then(function() {
      $location.path('/favorites');
    });
  };
});
