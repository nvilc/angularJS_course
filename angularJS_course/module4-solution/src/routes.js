(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    // Redirect to home page if no other url matches
    $urlRouterProvider.otherwise('/');

    // Set the ui state
    $stateProvider

    //Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })

    //Get the catgories data
    .state('categoryItems', {
      url: '/categories',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: 'categoriesController as categoryItems',
      resolve: {
        categories: ['$stateParams', 'MenuDataService',
          function($stateParams, MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
      }
    })

    .state('menuItemsList', {
      url: '/items/{itemId}',
      templateUrl: 'src/templates/main-items.template.html',
      controller: 'itemsDataController as menuItemsList',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
          function($stateParams, MenuDataService){
            return MenuDataService.getItemsForCategory($stateParams.itemId);
        }]
      }
    })

  };

})();
