angular.module('nakedBoutique').controller('menuCtrl', menuCtrl);

menuCtrl.$inject = ['$scope', '$state'];

function menuCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('first');
  };
};
