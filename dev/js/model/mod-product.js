/**
 * 
 */
'use strict';
angular.module('app')
	.factory('productModel', ['$http', function($http) {
		var rootpath = 'dist/json';
		return {
			getProduct: function(kind) {
				kind = '' + kind;
				return $http({
					url: rootpath + '/product_' + kind + '.json',
					method: 'get'
				});
			}
		};
	}]);