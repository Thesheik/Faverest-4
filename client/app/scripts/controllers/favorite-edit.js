'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FavoriteEditCtrl
 * @description
 * # FavoriteEditCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('FavoriteEditCtrl', function (
   $scope,
   $routeParams,
   Favorite,
   $location
 ) {
   $scope.editFavorite = true;
   $scope.favorite = {};
   Favorite.one($routeParams.id).get().then(function(favorite) {
     $scope.favorite = favorite;
     $scope.saveFavorite = function() {
       $scope.favorite.save().then(function() {
         $location.path('/favorite/' + $routeParams.id);
       });
     };
   });
 });
