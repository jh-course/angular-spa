(function () {
  "use strict";

angular.module('public').
controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['signedUpUser'];
  function MyInfoController(signedUpUser) {
      var $ctrl = this;

      $ctrl.user = signedUpUser;

      $ctrl.isSignedUp = function () {
        return !(typeof $ctrl.user === 'undefined' || $ctrl.user === null);
      };
  }

})();
