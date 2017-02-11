(function () {
  "use strict";

angular.module("MenuApp").
controller("CategoriesController", CategoriesController);

  CategoriesController.$inject = ["categories"];
  function CategoriesController(categories) {
    var categoriesController = this;
    console.log(categories.data);
    categoriesController.categories = categories.data;
  }

})();
