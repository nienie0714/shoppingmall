var app = angular.module('app');
app.filter('test', function() {
	return function(val, type) {
		if (type === '') return val;
		val = val.filter(function(item) {
			return item.type === type;
		});
		return val;
	};
});