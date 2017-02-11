(function () {
  "use strict";

  angular.module("data").
  service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ["$http"];
  function MenuDataService($http) {
      var menudataservice = this;

      menudataservice.getAllCategories = function () {
        return $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/categories.json"}).
          then(function(result) {
            return result;
          });
      };

      menudataservice.getItemsForCategory = function(categoryShortName) {
        console.log("Get items for category: ", categoryShortName);

        return $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/menu_items.json",
          params: {"category": categoryShortName}}).
          then(function(result) {
            return result;
          });
      };
  }

})();
