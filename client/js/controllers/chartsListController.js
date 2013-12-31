/**
 * User: chenop
 * Date: 12/27/13
 * Time: 1:22 PM
 *
 * Charts Controller
 */

var chartsApp = angular.module('chartsApp');

chartsApp.controller('chartsListController', ['$scope', 'chartsService',
	function ($scope, chartsService) {
		chartsService.initChartsList().then(function(asyncData) {
            $scope.charts = asyncData.data;
        });

		// watch the selectAll checkBox for changes
		$scope.$watch('shouldSelectAll', function () {
            if ($scope.charts == undefined)
                return;
			for (var i = 0; i < $scope.charts.length; i++) {
				$scope.charts[i].selected = $scope.shouldSelectAll;
			}
		}, true);

		$scope.tableRowClicked = function(chart) {
			chart.selected = !(chart.selected);
		};

		$scope.selectChart = function(chart) {
			if ($scope.selected_chart != undefined)
				$scope.selected_chart.selected = false;

			if ($scope.selected_chart == chart) {
				$scope.selected_chart = undefined;
				return;
			}
			$scope.selected_chart = chart;
			$scope.selected_chart.selected = true;

		}

		$scope.isChartSelected = function(chart) {
			return ($scope.selected_chart == chart);
		}

		$scope.clearSearchBox = function() {
			$scope.searchText = "";
		}
	}
]);

