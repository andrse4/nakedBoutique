angular.module('nakedBoutique').controller('shopCtrl', shopCtrl);

shopCtrl.$inject = ['$scope', '$state'];

function shopCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('first');
  };

  $scope.test = function(){
    alert('dsadhsa');
  };
};
