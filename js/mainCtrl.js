// INITILIZE CONTROLLER
// ============================================================
angular.module("quoteBook").controller("mainCtrl", function($scope, quoteService) {

  // VARIABLES
  // ============================================================
  $scope.quotes = quoteService.getQuotes();

  // FUNCTIONS
  // ============================================================
  $scope.deleteQuote = function(text) {
    quoteService.removeQuote(text);
  };

  $scope.addQuote = function(newQuote) {
    quoteService.addQuote(newQuote);
  };

});
