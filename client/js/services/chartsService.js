/**
 * User: chenop
 * Date: 12/29/13
 * Time: 12:33 AM
 * Charts Service
 */

var chartsApp = angular.module('chartsApp');

chartsApp.factory('chartsService', function () {
	var charts =
		[
			{
				'id': 1,
				'name': 'chart1',
				'selected': false
			},
			{
				'id': 2,
				'name': 'chart2',
				'selected': false
			},
			{
				'id': 3,
				'name': 'chart3',
				'selected': false
			}
		];

	return {
		getCharts: function () {
			return charts;
		}
	}
//		getCharts: function () {
//			return $http({
//				method: 'GET',
//				url: '/api/charts'
//			}).success(function () {
//					console.log("getCharts Succeeded!");
//				}
//			);
//		}
});
