/**
 * User: chenop
 * Date: 12/27/13
 * Time: 11:22 PM
 *
 * Chart Controller
 */

var chartsApp = angular.module('chartsApp');

chartsApp.controller('chartController', ['$scope', 'chartsService', 'promiseTracker',
	function ($scope, chartsService, promiseTracker) {
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

		$scope.$watch('selected_chart', function () {
			buildChartData();
			updateTitle();
		}, true);

		function buildChartData() {
			$scope.data = {
				"series": [],
				"data": []
			}

			if ($scope.selected_chart != undefined) {
                $scope.chartTracker = promiseTracker('chartTracker');
                chartsService.initChartData($scope.selected_chart).then(function(asyncData) {
                    $scope.data = asyncData.data;
                });
			}
		}

		function updateTitle() {
			var title = DEFAULT_TITLE;
			if ($scope.selected_chart != undefined) {
				title = $scope.selected_chart;
			}
			$scope.config.title = title;
		}
	}
])
;
