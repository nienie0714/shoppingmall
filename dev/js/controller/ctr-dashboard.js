/**
 * 
 */
'use strict';
angular.module('app')
.controller('dashboard', ['$scope', 'current', function($scope, current) {
	current();
	$scope.model = 'Dashboard';
}]);