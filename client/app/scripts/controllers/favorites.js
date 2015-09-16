'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('FavoritesCtrl', function ($scope) {
    $scope.favorites = [
      {
        title: 'Brentling Watch',
        url:'http://ep.yimg.com/ay/movadobaby/breitling-navitimer-1461-m1938022-bd20-100w-16.gif'
  },
      {
        title: 'Brentling Watch',
        url:'http://ep.yimg.com/ay/movadobaby/breitling-navitimer-1461-m1938022-bd20-100w-16.gif'
  }
];
  });
