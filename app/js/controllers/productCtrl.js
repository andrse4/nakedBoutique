angular.module('nakedBoutique').controller('productCtrl', productCtrl);

productCtrl.$inject = ['$scope', '$state'];

function productCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('first');
  };

  $scope.test = function(){
    alert('dsadhsa');
  };
};
