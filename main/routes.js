angular.module("app").config(function ($stateProvider, $urlRouterProvider) {
	

	$urlRouterProvider
		.otherwise("/");
		
	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "./minified/features/searchPage/searchPage.html",
			controller: "searchPageCtrl"
		});	
	
	
});


