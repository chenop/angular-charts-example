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
			labels: false,
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

		buildChartData();

		$scope.$watch('selected_charts', function () {
			buildChartData();
			updateTitle();
		}, true);

		function buildChartData() {
			$scope.data = {
				"series": [],
				"data": []
			}

			for (var i = 0; i < $scope.charts.length; i++) {
				var currChart = $scope.charts[i];
				if (currChart.selected) {
					$scope.data.series.push(currChart.name);
					$scope.data.data.push(currChart.data);
				}
			}
		}

		function updateTitle() {
			var title = DEFAULT_TITLE;
			if ($scope.selected_charts.length > 0) {
				title = $scope.selected_charts[0];
				for (var i = 1; i < $scope.selected_charts.length; i++) {
					title = title + " && " + $scope.selected_charts[i];
				}
			}
			$scope.config.title = title;
		}
	}
])
;
