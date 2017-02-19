(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

SignUpService.$inject = [];
function SignUpService() {
  var service = this;

  service.setSignedUp = function (user) {
    service.user = user;
  };

  service.getSignedUp = function () {
    return service.user;
  };

}

})();
