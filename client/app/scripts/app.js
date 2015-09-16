'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'restangular',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl'
      })
      .when('/create/favorite', {
        templateUrl: 'views/favorite-add.html',
        controller: 'FavoriteAddCtrl'
      })
      .when('/favorite/:id', {
        templateUrl: 'views/favorite-view.html',
        controller: 'FavoriteViewCtrl'
      })
      .when('/favorite/:id/edit', {
        templateUrl: 'views/favorite-edit.html',
        controller: 'FavoriteEditCtrl'
      })
      .when('/favorite/:id/delete', {
        templateUrl: 'views/favorite-delete.html',
        controller: 'FavoriteDeleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('FavoriteRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Favorite', function(FavoriteRestangular) {
    return FavoriteRestangular.service('favorite');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
