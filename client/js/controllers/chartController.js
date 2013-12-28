/**
 * User: chenop
 * Date: 12/27/13
 * Time: 11:22 PM
 *
 * Chart Controller
 */

var chartsApp = angular.module('chartsApp');

chartsApp.controller('chartController', ['$scope',
	function ($scope) {
		$scope.chartType = 'line';

		$scope.config = {
			title: 'Chart1',
			tooltips: true,
			labels: true,
			mouseover: function () {
			},
			mouseout: function () {
			},
			click: function () {
			},
			legend: {
				display: false,
				//could be 'left, right'
				position: 'right'
			}
		}

		$scope.data = {
			"series": [
				"Sales",
				"Income",
				"Expense"
			],
			"data": [
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
	}
]);
