(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItemsSection.html',
      scope:{
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  };

  function FoundItemsDirectiveController() {
    var list = this;

    //Check if the list is empty
    list.foundItemsIsEmtpy = function () {
      if (list.items[0] == 'Empty search') {
        return true;
      };
    };
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowItCtrl = this;
    narrowItCtrl.found = []
    narrowItCtrl.getMatchedMenuItems = function (searchTerm ) {
      narrowItCtrl.found = []
      if (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(narrowItCtrl.searchTerm);
        promise.then(function(result) {
          narrowItCtrl.found = result;
        }).catch(function(error){
          console.log(error);
        });
        } else {
          narrowItCtrl.found.push('Empty search')
        }
    };

    narrowItCtrl.removeItem = function (itemIndex) {
      narrowItCtrl.found.splice(itemIndex, 1);
    };
  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method:"GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function(result){
        // process result and only keep items that match
        var foundItems = [];
        for (var i = 0; i < result.data.menu_items.length; i++) {
          if (result.data.menu_items[i].description.toUpperCase().includes(searchTerm.toUpperCase())) {
            var item = result.data.menu_items[i];
            foundItems.push(item);
          };
        };

        // return processed items
        return foundItems;
      });

    };



  };

})();
