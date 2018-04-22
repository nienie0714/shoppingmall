/**
 * 
 */
'use strict';
angular.module('app')
	.factory('historyModel', ['$http', function($http) {
		var rootpath = 'dist/json';
		return {
			getHistory: function() {
				return $http({
					url: rootpath + '/history.json',
					method: 'get'
				});
			}
		};
	}]);