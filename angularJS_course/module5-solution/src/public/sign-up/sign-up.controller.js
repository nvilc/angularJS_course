(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService', 'MenuService'];
  function SignUpController(SignUpService, MenuService) {
    var signUpCtrl = this;
    signUpCtrl.favoriteDishLocated = false;
    signUpCtrl.registrationCompleted = false;
    signUpCtrl.favoriteDishMessageDisabled = true;
    signUpCtrl.registrationMessageDisabled = true;

    signUpCtrl.submit = function(event){
      var user = {
        firstName: signUpCtrl.firstName,
        lastName: signUpCtrl.lastName,
        email: signUpCtrl.email,
        phone: signUpCtrl.phone,
        favoriteDish: signUpCtrl.favoriteDish.toUpperCase()
      };

      MenuService.getFavoriteDish(user.favoriteDish)
        .then(function(data){
          user.data = data;
          console.log(user);
          SignUpService.addUser(user);
          signUpCtrl.favoriteDishLocated = true;
          signUpCtrl.registrationCompleted = true;
          // console.log(user)
        }, function(error){
          console.log('Favorite dish was not found')
          signUpCtrl.favoriteDishLocated = false;
          signUpCtrl.registrationCompleted = false;
          signUpCtrl.favoriteDishMessageDisabled = false;
          signUpCtrl.registrationMessageDisabled = false;
        })
    };
  }

})();
