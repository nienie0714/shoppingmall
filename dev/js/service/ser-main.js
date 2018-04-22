'use strict';
angular.module('app')
.factory('current', function() {
	return function() {
		var current = window.location.hash.split('/').pop();
		$('.js-' +  current).addClass('active').siblings().removeClass('active');
	};
});