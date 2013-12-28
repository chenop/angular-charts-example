/**
 * User: chenop
 * Date: 12/27/13
 * Time: 2:00 PM
 *
 * Application config
 */

// Declare app level module which depends on filters, and services
angular.module('chartsApp',
	[
		, 'angularCharts'
	]
);

//app.config(['$routeProvider', '$locationProvider',
//	function ($routeProvider, $locationProvider) {
//		$routeProvider
//			.when('/', { templateUrl: '/views/home.html' })
//			.when('/signin', { templateUrl: '/views/users/signin.html' })
//			.when('/signup', { templateUrl: '/views/users/signup.html' })
//			.when("/companies", { templateUrl: '/views/companies/list.html' })
//			.when('/user_details', { templateUrl: '/views/users/details.html' })
//			.otherwise({ redirectTo: '/' });
//
//		$locationProvider.html5Mode(true);
//	}])

