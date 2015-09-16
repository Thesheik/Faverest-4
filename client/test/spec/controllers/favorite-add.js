'use strict';

describe('Controller: FavoriteAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var FavoriteAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoriteAddCtrl = $controller('FavoriteAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavoriteAddCtrl.awesomeThings.length).toBe(3);
  });
});
