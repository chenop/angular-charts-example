/**
 * User: chenop
 * Date: 12/27/13
 * Time: 11:22 PM
 *
 * Chart Controller
 */

var chartsApp = angular.module('chartsApp');

chartsApp.controller('chartController', ['$scope', 'chartsService',
	function ($scope) {
		var DEFAULT_TITLE = "Choose a chart to begin"
		$scope.chartType = 'line';

		$scope.config = {
			title: DEFAULT_TITLE,
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

		$scope.$watch('selected_charts', function () {
			var title = DEFAULT_TITLE;
			if ($scope.selected_charts.length > 0) {
				title = $scope.selected_charts[0];
				for (var i = 1; i < $scope.selected_charts.length; i++) {
					title = title + " && " + $scope.selected_charts[i];
				}
			}
			$scope.config.title = title;
		}, true);

	}
]);
