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

			if ($scope.selected_charts.length > 0) {
				$scope.data = $scope.selected_charts[0].data;
			}
		}

		function updateTitle() {
			var title = DEFAULT_TITLE;
			if ($scope.selected_charts.length > 0) {
				title = $scope.selected_charts[0].name;
				for (var i = 1; i < $scope.selected_charts.length; i++) {
					title = title + " && " + $scope.selected_charts[i].name;
				}
			}
			$scope.config.title = title;
		}
	}
])
;
