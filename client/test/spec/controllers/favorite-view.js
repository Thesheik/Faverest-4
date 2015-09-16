'use strict';

describe('Controller: FavoriteViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var FavoriteViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoriteViewCtrl = $controller('FavoriteViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavoriteViewCtrl.awesomeThings.length).toBe(3);
  });
});
