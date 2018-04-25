/**
 * 
 */
'use strict';
angular.module('app', ['ui.router'])
    .controller('appController', ['$rootScope', 'historyModel', function($rootScope, historyModel) {
        $rootScope.rootPath = '/dist';
        var rootScope = {
            menus: [{
                    icon: 'fa fa-dashboard',
                    name: 'HOME',
                    href: '#!/home',
                    className: 'home',
                    isactive: ''
                },
                {
                    icon: 'fa fa-share-alt',
                    name: 'SUPER MARKET',
                    href: '#!/agent',
                    className: 'agent',
                    isactive: ''
                },
                {
                    icon: 'fa fa-train',
                    name: 'GLASSES',
                    href: '#!/glasses',
                    className: 'glasses',
                    isactive: ''
                },
                {
                    icon: 'fa fa-life-buoy',
                    name: 'SHOES',
                    href: '#!/shoes',
                    className: 'shoes',
                    isactive: ''
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
        /*$scope.selectmenu = function(index) {
            $scope.glassestype.forEach(function(item, i) {
                if (index === i) {
                    item.className = 'active';
                } else {
                    item.className = '';
                }
            });
        };*/
        historyModel.getHistory().then(function(res) {
            if (res.status === 200) {
                var data = res.data.data;
                $rootScope.history = data;
            }
        });
    }]);