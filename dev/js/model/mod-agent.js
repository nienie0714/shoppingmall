/**
 * 
 */
'use strict';
angular.module('app')
	.factory('agentModel', ['$http', function($http) {
		var rootpath = 'dist/json';
		return {
			getserver: function() {
				return $http({
					url: rootpath + '/server.json',
					method: 'get'
				});
			}
		};
	}]);
