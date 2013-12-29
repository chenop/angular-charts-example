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
					'series': [
						'a1'
						, 'a2'
						, 'a3'
					],
					'data': [
						{
							"x": "point1",
							"y": [
								54,
								0,
								70
							],
							"tooltip": "This is a tooltip"
						},
						{
							"x": "point2",
							"y": [
								22,
								10,
								60
							],
							"tooltip": "This is a tooltip"
						},
						{
							"x": "point3",
							"y": [
								11,
								20,
								50
							],
							"tooltip": "This is a tooltip"
						}
					]
				}
			},
			{
				'id': 1,
				'name': 'Another Chart',
				'selected': false,
				'data': {
					'series': [
						'attr1'
						, 'attr12'
					],
					'data': [
						{
							"x": "snapshot1",
							"y": [
								10
								, 20
							],
							"tooltip": "This is a tooltip"
						},
						{
							"x": "snapshot2",
							"y": [
								25
								, 7
							],
							"tooltip": "This is a tooltip"
						},
						{
							"x": "snapshot3",
							"y": [
								60
								, -2
							],
							"tooltip": "This is a tooltip"
						}
					]
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
