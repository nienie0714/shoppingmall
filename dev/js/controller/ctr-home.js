/**
 * 
 */
'use strict';
angular.module('app')
.controller('home', ['$scope', 'current', function($scope, current) {
	current();
	$scope.model = 'Home';
}]);