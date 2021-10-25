(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://nvilc-angular-solution5.herokuapp.com/')
.config(config);

// .constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
