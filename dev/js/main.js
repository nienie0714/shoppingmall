/**
 * 
 */
'use strict';
angular.module('app', ['ui.router'])
    .controller('appController', ['$rootScope', 'historyModel', '$scope', function($rootScope, historyModel, $scope) {
        $rootScope.rootPath = '/dist';
        var rootScope = {
            // index的sidebar的菜单
            menus: [{
                    icon: 'fa fa-dashboard',
                    name: 'HOME',
                    // 当点击<a>时，地址栏发生变化，ui-rooter会监听导航栏的变化，在ui-view中跳转到相应的视图
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
        // 将rootScope中的对象添加到$rootScope中
        $rootScope = angular.extend($rootScope, rootScope);
        // ng-click点击某menu后，修改样式
        $scope.selectmenu = function(index) {
            console.log(index);
            $scope.menus.forEach(function(item, i) {
                if (index === i) {
                    item.isactive = 'menuactive';
                } else {
                    item.isactive = '';
                }
            });
        };
        // 拿到history的json文件，mod-history.js
        historyModel.getHistory().then(function(res) {
            if (res.status === 200) {
                var data = res.data.data;
                $rootScope.history = data;
            }
        });
        // 监听搜索 值
        $scope.$watch('type', function(newVal, oldVal) {
            // 向下广播
            // $broadcast只能向child controller传递event与data
            $scope.$broadcast('type', newVal);
        });
    }]);