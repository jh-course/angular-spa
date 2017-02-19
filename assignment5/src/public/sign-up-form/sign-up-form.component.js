(function () {
"use strict";

angular.module('public')
.component('signUpForm', {
  templateUrl: 'src/public/sign-up-form/sign-up-form.html',
  bindings: {
    onSignUp: '&',
    signedUpUser: '<'
  },
  controller: SignUpFormController
});

SignUpFormController.$inject = ['MenuService'];
function SignUpFormController(MenuService) {
    var signUpFormCtrl = this;

    signUpFormCtrl.user = signUpFormCtrl.signedUpUser;
    signUpFormCtrl.isMenuItemInvalid = false;
    signUpFormCtrl.isCompleted = false;

    signUpFormCtrl.submit = function () {

      MenuService.getMenuItem(signUpFormCtrl.user.menuItemName).
      then(function(result) {
        signUpFormCtrl.user.menuItem = result;
        signUpFormCtrl.onSignUp({ user: signUpFormCtrl.user });
        signUpFormCtrl.isMenuItemInvalid = false;
        signUpFormCtrl.isCompleted = true;
      }).
      catch(function(error) {
        signUpFormCtrl.onSignUp({ user: null });
        signUpFormCtrl.isMenuItemInvalid = true;
        signUpFormCtrl.isCompleted = false;
      });

    };
}

})();
