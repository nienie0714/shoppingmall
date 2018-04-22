/**
 * 
 */
'use strict';
angular.module('app')
.controller('cruise', ['$scope', 'current', function($scope, current) {
	current();
	$scope.model = 'My Cruise';
}]);