angular.module('nakedBoutique').controller('secondCtrl', secondCtrl);

secondCtrl.$inject = ['$scope', '$state'];

function secondCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('first');
  };
};
