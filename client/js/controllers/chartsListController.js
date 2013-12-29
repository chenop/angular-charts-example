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
		$scope.charts = chartsService.getCharts();

		// selected addresses
		$scope.selected_charts = [];

		// watch the selectAll checkBox for changes
		$scope.$watch('shouldSelectAll', function () {
			for (var i = 0; i < $scope.charts.length; i++) {
				$scope.charts[i].selected = $scope.shouldSelectAll;
			}
		}, true);

		$scope.$watch('charts|filter:{selected:true}', function (nv) {
			$scope.selected_charts = nv.map(function (chart) {
				return chart;
			});
		}, true);

		$scope.tableRowClicked = function(chart) {
			chart.selected = !(chart.selected);
		};

		$scope.clearSearchBox = function() {
			$scope.searchText = "";
		}
	}
]);

