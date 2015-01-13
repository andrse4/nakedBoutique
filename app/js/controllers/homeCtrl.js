angular.module('nakedBoutique').controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope', '$state'];

function homeCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('second');
  };
};
