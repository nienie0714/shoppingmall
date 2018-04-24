/**
 * 
 */
'use strict';
angular.module('app')
.controller('product', ['$scope', 'current', function($scope, current) {
	// ?
	current();
	$scope.model = 'Product';
	/*$scope.glassestype = [
		{name：'太阳镜', id: '1'},
		{name：'防辐射', id: '2'},
		{name：'眼镜太', id: '3'},
		{name：'光学镜', id: '4'},
		{name：'装饰眼镜', id: '5'},
		{name：'老花镜', id: '6'},
	];*/
}]);