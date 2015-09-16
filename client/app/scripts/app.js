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
  .config(function ($routeProvider, RestangulerProvider) {

    RestangulerProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl',
        controllerAs: 'favorites'
      })
      .otherwise({
        redirectTo: '/'
      })
      .factory('FavoriteRestangular', function(Restanguler){
        return Restanguler.withConfi(function(RestangularConfigurer){
          RestangularConfigurer.setRestangularFields({
            id: '_id'
          });
        });
      });
  });
