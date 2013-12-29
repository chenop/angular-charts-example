/**
 * User: chenop
 * Date: 12/27/13
 * Time: 2:00 PM
 *
 * Application config
 */

// Declare app level module which depends on filters, and services
var app = angular.module('chartsApp',
	[
		, 'angularCharts'
		, 'ngAnimate'
	]
);

//app.config(['$routeProvider', '$locationProvider',
//	function ($routeProvider, $locationProvider) {
//		$routeProvider
//			.when('/', { templateUrl: '/views/chart.html' })
//			.otherwise({ redirectTo: '/' });
//
//		$locationProvider.html5Mode(true);
//	}]) ;

