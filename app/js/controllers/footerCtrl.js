angular.module('nakedBoutique').controller('footerCtrl', footerCtrl);

footerCtrl.$inject = ['$scope', '$state'];

function footerCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('first');
  };
};
