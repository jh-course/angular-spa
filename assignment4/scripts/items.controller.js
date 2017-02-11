(function () {
  "use strict";

angular.module("MenuApp").
controller("ItemsController", ItemsController);

  ItemsController.$inject = ["items"];
  function ItemsController(items) {
    var itemsController = this;
    console.log(items.data.menu_items);
    itemsController.items = items.data.menu_items;
  }

})();
