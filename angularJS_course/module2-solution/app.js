(function(){
  "use strict";

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;

    toBuyCtrl.items = ShoppingListCheckOffService.getToBuy();
    // for (var i = 0; i < items.length; i++) {
    //   console.log(items[i].name & ' ' items[i].quantity);
    // };

    toBuyCtrl.addToBought = function (itemIndex) {
      // console.log(itemIndex + " " + toBuyCtrl.items[itemIndex].name)
      ShoppingListCheckOffService.addToBought(itemIndex);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBought()
  };

function ShoppingListCheckOffService() {
  var service = this;

  //Array to hold the items that are going to be bought
  var toBuy = [
    {name: "cookies", quantity: 4},
    {name: "oranges", quantity: 5},
    {name: "bottles of juice", quantity: 2},
    {name: "bananas", quantity: 2},
    {name: "strawberries", quantity: 3}
  ];

  //Array to hold the items that have already been Bought
  var bought = [];

  service.addToBought = function (itemIndex) {
    var item = {
      name: toBuy[itemIndex].name,
      quantity: toBuy[itemIndex].quantity
    };
    bought.push(item);
    toBuy.splice(itemIndex, 1)
  };

  service.getToBuy = function () {
    return toBuy;
  };

  service.getBought = function () {
    return bought;
  };
};

})();
