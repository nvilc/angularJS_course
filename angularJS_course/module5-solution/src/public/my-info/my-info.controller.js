(function(){
  'use strict';

  angular.module('public')
  .controller('MyInformationController', MyInformationController);

  MyInformationController.$inject = ['user', 'ApiPath'];
  function MyInformationController(user, ApiPath){
    var $ctrl = this;
    $ctrl.userAvailable = false;
    $ctrl.basePath = ApiPath;
    if(user){
      $ctrl.userAvailable = true;
      $ctrl.firstName = user.firstName;
      $ctrl.lastName = user.lastName;
      $ctrl.email = user.email;
      $ctrl.phone = user.phone;
      $ctrl.favoriteDishNumber = user.favoriteDish;
      $ctrl.name = user.data.name;
      $ctrl.description = user.data.description;
      console.log(user.data.name);
      console.log(user.data.description);
      console.log(user.data);
      console.log($ctrl.basePath);
    } else {
      $ctrl.userAvailable = false;
    };
  };
})();
