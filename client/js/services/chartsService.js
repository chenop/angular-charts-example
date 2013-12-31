/**
 * User: chenop
 * Date: 12/29/13
 * Time: 12:33 AM
 * Charts Service
 */

var chartsApp = angular.module('chartsApp');

chartsApp.factory('chartsService', ['$http',
    function ($http) {
        return {
            initChartsList: function () {
                return $http({
                    method: 'GET',
                    url: '../client/json/chartList.json'
                }).success(function (data, status, headers, config) {
                    }
                ).error(function (err) {
                        console.log("initChartsList failed - Server is down :(");
                    });
            },

            initChartData: function (chart) {
                return $http.get('../client/json/chartData.json', {tracker: 'chartTracker'})
                    .success(function (result, status, headers, config) {
                    }
				).error(function(err) {
						console.log("initChartData failed - Server is down :(");
					});
            }
        }
    }]);
