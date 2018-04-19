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
				name: 'DASHBOARD',
				href: '#!/dashboard',
				className: 'dashboard'
			},
			{
				icon: 'fa fa-share-alt',
				name: 'AGENT',
				href: '#!/agent',
				className: 'agent'
			},
			{
				icon: 'fa fa-train',
				name: 'MY CRUISE',
				href: '#!/cruise',
				className: 'cruise'
			},
			{
				icon: 'fa fa-life-buoy',
				name: 'Help',
				href: '#!/help',
				className: 'help'
			}
		],
		showMenu: function() {
			$('.js-menus').removeClass('packUp');
		},
		hideMenu: function() {
			$('.js-menus').addClass('packUp');
		}
	};
	$rootScope = angular.extend($rootScope, rootScope);
	historyModel.getHistory().then(function(res) {
		if (res.status === 200) {
			var data = res.data.data;
			$rootScope.history = data;
		}
	});
}]);

