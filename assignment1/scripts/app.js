(function() {
'use strict';

var numberOfDishes = function(csl) {
  return csl.split(',').filter(function(s) {return s.trim().length > 0}).length;
};

var LunchCheckController = function($scope) {
  $scope.foodList="";
  $scope.message="";

  $scope.checkIfTooMuch = function() {
    var dishesToEat = numberOfDishes($scope.foodList);
    if (dishesToEat === 0) {
      $scope.message="Please enter data first";
    } else if (dishesToEat > 3) {
      $scope.message="Too much!";
    } else {
      $scope.message="Enjoy!";
    }
  };
};
LunchCheckController.$inject = ['$scope'];

angular.module('LunchCheck', []).
controller('LunchCheckController', LunchCheckController);

})();
