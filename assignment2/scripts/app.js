(function() {
'use strict';

////////////////////////////////////////////////////////////////////////////////
// Services
////////////////////////////////////////////////////////////////////////////////

var ShoppingListCheckOffService = function() {
  var service = this;

  var boughtItems = [];
  var itemsToBuy = [
    {name: "cookies", quantity: 10},
    {name: "bagels", quantity: 10},
    {name: "flapjacks", quantity: 10},
    {name: "s'mores", quantity: 10},
    {name: "tea", quantity: 10}
  ];

  service.getBoughtItems = function() {
    return boughtItems;
  };

  service.getItemsToBuy = function() {
    return itemsToBuy;
  };

  service.alreadyBoughtItem = function(name) {
    var index = itemsToBuy.findIndex(function(e) {return e.name === name});

    if (index !== -1) {
      boughtItems.push(itemsToBuy.splice(index, 1)[0]);
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Controllers
////////////////////////////////////////////////////////////////////////////////

var AlreadyBoughtController = function(listService) {
  var bought = this;

  bought.getBoughtItems = function() {
    return listService.getBoughtItems();
  };
};
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

var ToBuyController = function(listService) {
  var toBuy = this;

  toBuy.getItemsToBuy = function() {
    return listService.getItemsToBuy();
  };

  toBuy.alreadyBoughtItem = function(name) {
    listService.alreadyBoughtItem(name);
  };
};
ToBuyController.$inject = ['ShoppingListCheckOffService'];

////////////////////////////////////////////////////////////////////////////////
// Angular setup
////////////////////////////////////////////////////////////////////////////////

angular.module('ShoppingListCheckOff', []).
controller('AlreadyBoughtController', AlreadyBoughtController).
controller('ToBuyController', ToBuyController).
service('ShoppingListCheckOffService', ShoppingListCheckOffService);

})();
