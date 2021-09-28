(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('itemsDataController', itemsDataController);

  itemsDataController.$inject = ['items']
  function itemsDataController(items){
    var $ctrl = this;

    $ctrl.items = items;
    // console.log($ctrl.items)
  };
})();
