(function () {
  "use strict";

angular.module("public").
controller("SignUpController", SignUpController);

  SignUpController.$inject = ["SignUpService", "signedUpUser"];
  function SignUpController(SignUpService, signedUpUser) {
      var $ctrl = this;

      $ctrl.user = signedUpUser;

      $ctrl.submit = function (user) {
        SignUpService.setSignedUp(user);
      };

      $ctrl.getSignedUpUser = function () {
        return $ctrl.user;
      };
  }

})();
