angular.module('nakedBoutique', [
  'ui.router'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider.
  state('home',{
    url: '/home',
    views:{
      menu:{
        templateUrl: 'views/menu-template.html',
        controller: 'menuCtrl'
      },
      body:{
        templateUrl: 'views/home-template.html',
        controller: 'homeCtrl'
      },
      footer:{
        templateUrl: 'views/footer-template.html',
        controller: 'footerCtrl'
      }
    }
  }).
  state('shop',{
    url: '/shop:category',
    views:{
      menu:{
        templateUrl: 'views/menu-template.html',
        controller: 'menuCtrl'
      },
      body:{
        templateUrl: 'views/shop-template.html',
        controller: 'homeCtrl'
      },
      footer:{
        templateUrl: 'views/footer-template.html',
        controller: 'footerCtrl'
      }
    }
  });
}]);


var isLoggedIn = function($firebase, $state, firebaseRefFactory){
	var ref = new Firebase(firebaseRefFactory.getMainRef());
	var authData = ref.getAuth();
	if (authData) {
	  console.log("Authenticated user with uid:", authData.uid);
		return;
	}
	else{
		// send user to login state/route
		$state.go('login');
	}
};
