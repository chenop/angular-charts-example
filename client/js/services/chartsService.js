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
				'selected': false,
				'data': {
					"x": "point1",
					"y": [
						54,
						0,
						70
					],
					"tooltip": "This is a tooltip"
				}
			},
			{
				'id': 2,
				'name': 'chart2',
				'selected': false,
				'data': {
					"x": "point2",
					"y": [
						22,
						10,
						60
					],
					"tooltip": "This is a tooltip"
				}
			},
			{
				'id': 3,
				'name': 'chart3',
				'selected': false,
				data: {
					"x": "point3",
					"y": [
						11,
						20,
						50
					],
					"tooltip": "This is a tooltip"
				}
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
