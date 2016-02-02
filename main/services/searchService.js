angular.module("app").service("searchService", function ($http) {
	
	this.search = function (searchInput) {
		
		var appID = "ErinVinc-7802-4a69-9ae1-1a5889e5f7b0";
		
		return $http({
			method: "GET",
			url: "http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=" + appID + "&siteid=0&version=525&QueryKeywords=" + searchInput + "&AvailableItemsOnly=true&MaxEntries=2"
		}).then(function (response) {
			console.log("response", response.data);
			return response.data;
		});
		
	};
	
	
});