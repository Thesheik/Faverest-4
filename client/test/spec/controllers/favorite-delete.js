'use strict';

describe('Controller: FavoriteDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var FavoriteDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoriteDeleteCtrl = $controller('FavoriteDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavoriteDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
