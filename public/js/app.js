angular.module('simpleRouting', ['ngRoute']).
	config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        	// Default page if the url is empty
            when('/', {templateUrl: 'partials/home.html'}).
            // If URL isn't empty, go to the page with the
            // same name as the URL.
            when('/:page', {templateUrl: function(routeArgs){
                return 'partials/' + routeArgs['page'] + '.html';
            }}).
            // If none of the above applies, redirect to /
            otherwise({redirectTo: '/'});
    }]);