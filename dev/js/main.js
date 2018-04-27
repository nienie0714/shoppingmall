/**
 * 
 */
'use strict';
angular.module('app', ['ui.router'])
    .controller('appController', ['$rootScope', 'historyModel', '$scope', function($rootScope, historyModel, $scope) {
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
                    name: 'BAGS',
                    href: '#!/bags',
                    className: 'bags',
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
        $scope.selectmenu = function(index, id) {
            $scope.menus.forEach(function(item, i) {
                if (index === i) {
                    item.isactive = 'menuactive';
                } else {
                    item.isactive = '';
                }
            });
        };
        historyModel.getHistory().then(function(res) {
            if (res.status === 200) {
                var data = res.data.data;
                $rootScope.history = data;
            }
        });
        // 监听搜索 值
        $scope.$watch('type', function(newVal, oldVal) {
            $scope.$broadcast('type', newVal);
        });
    }]);