(function(){
  'use strict';

  angular.module('common')
  .service('SignUpService', SignUpService);

  function SignUpService() {

    var service = this;

    service.users = [];

    service.addUser = function(user){
      service.users.push(user);
    }

    service.getUser = function(){
      if (service.users.length > 0) {
        return service.users[0];
      }
    }

  }

})();
