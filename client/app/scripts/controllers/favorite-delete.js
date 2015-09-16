'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FavoriteDeleteCtrl
 * @description
 * # FavoriteDeleteCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('FavoriteDeleteCtrl', function (
   $scope,
   $routeParams,
   Favorite,
   $location
 ) {
   $scope.favorite = Favorite.one($routeParams.id).get().$object;
   $scope.deleteFavorite = function() {
     $scope.favorite.remove().then(function() {
       $location.path('/favorites');
     });
   };
   $scope.back = function() {
     $location.path('/favorite/' + $routeParams.id);
   };
 });
