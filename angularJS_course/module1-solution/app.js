(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController($scope) {
    $scope.inputBox = "";
    $scope.LunchCheckMessage = "";

    $scope.style_obj = {
      "color": "white",
      "border": "3px solid #0893cf",
    };

    $scope.displayMessage = function() {
      var message = checkNumberOfItems($scope.inputBox);
      $scope.LunchCheckMessage = message;
    };
    function checkNumberOfItems(textInput){
      if (textInput.trim() === "") {
        return "Please enter data first";
      }
      else {
        var blankCount = checkNumberOfEmptyItems($scope.inputBox);
        // console.log(blankCount)
        if (textInput.trim().split(",").length - blankCount <= 3) {
          $scope.style_obj["color"] = "green";
          $scope.style_obj["border-color"] = "green";
          return "Enjoy!";
        }
        else {
          $scope.style_obj["color"] = "red";
          $scope.style_obj["border-color"] = "red";
          return "Too much!";
        };
      };
    };
    function checkNumberOfEmptyItems(textInput) {
      var blankCount = 0;
      for (var i = 0; i < textInput.trim().split(",").length; i++) {
        if (textInput.trim().split(",")[i].trim() === "") {
          blankCount += 1;
        };
      };
      return blankCount;
    };
  };
})();
