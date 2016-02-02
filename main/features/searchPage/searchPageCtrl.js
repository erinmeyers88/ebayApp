angular.module("app").controller("searchPageCtrl", function ($scope, searchService) {

		$scope.search = function (searchInput) {
			searchService.search(searchInput).then(function (response) {
				$scope.searchResults = response;
			});
		};
		
		
		
});