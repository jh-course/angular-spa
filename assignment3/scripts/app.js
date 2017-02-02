(function(){
  'use strict';

  angular.module("NarrowItDownApp", []).
  service("MenuSearchService", MenuSearchService).
  controller("NarrowItDownController", NarrowItDownController).
  directive("foundItems", FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: "foundItems.html",
      scope: {
        found: "<",
        onRemove: "&"
      },
      controller: NarrowItDownController,
      controllerAs: "narrowItDown",
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;

    narrowItDown.searchTerm = "";

    narrowItDown.filterMenuItems = function() {
      MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm).
      then(function(result) {
        narrowItDown.found = result;
      }).
      catch(function(error) {
        console.log("Error: " + error);
      });
    };

    narrowItDown.removeMenuItem = function(index) {
      narrowItDown.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ["$http", "$q"];
  function MenuSearchService($http, $q) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      if (searchTerm === "") {
          return $q.resolve([]);
      } else {

      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"}).
        then(function(result) {

          var filteredMenuItems = result.data.menu_items.filter(
            function(menuItem) {
              return menuItem.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            }
          );

          return filteredMenuItems;
        });
    };
  }
  }
})();
