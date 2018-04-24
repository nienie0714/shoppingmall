/**
 * 
 */
'use strict';
angular.module('app', ['ui.router'])
.controller('appController', ['$rootScope', 'historyModel', function($rootScope, historyModel) {
	$rootScope.rootPath = '/dist';
	var rootScope = {
		menus: [
			{
				icon: 'fa fa-dashboard',
				name: 'HOME',
				href: '#!/home',
				className: 'home'
			},
			{
				icon: 'fa fa-share-alt',
				name: 'SUPER MARKET',
				href: '#!/agent',
				className: 'agent'
			},
			{
				icon: 'fa fa-train',
				name: 'ENTRY LUX',
				href: '#!/product',
				className: 'product'
			},
			{
				icon: 'fa fa-life-buoy',
				name: 'BOOK STORE',
				href: '#!/help',
				className: 'help'
			}
		]
		/*showMenu: function() {
			$('.js-menus').removeClass('packUp');
		},
		hideMenu: function() {
			$('.js-menus').addClass('packUp');
		}*/
	};
	$rootScope = angular.extend($rootScope, rootScope);
	historyModel.getHistory().then(function(res) {
		if (res.status === 200) {
			var data = res.data.data;
			$rootScope.history = data;
		}
	});
}]);

