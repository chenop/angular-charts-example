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
//		$scope.charts =
//			[
//				{
//					'id': 1,
//					'name': 'chart1',
//					'selected': false
//				},
//				{
//					'id': 2,
//					'name': 'chart2',
//					'selected': false
//				},
//				{
//					'id': 3,
//					'name': 'chart3',
//					'selected': false
//				}
//			];
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
				return chart.name;
			});
		}, true);
	}
]);

