'use strict';

describe('Controller: FavoriteEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var FavoriteEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoriteEditCtrl = $controller('FavoriteEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavoriteEditCtrl.awesomeThings.length).toBe(3);
  });
});
