/**
 * 
 */
'use strict';
angular.module('app')
.controller('help', ['$scope', 'current', function($scope, current) {
	current();
	$scope.model = 'Help';
}]);
