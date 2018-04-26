/**
 * 
 */
'use strict';
angular.module('app')
    .controller('glasses', ['$scope', 'current', 'productModel', 
        function($scope, current, model) {
        // ?
        current();
        var maps = {
            g1 : '1',
            g2 : '2',
            g3 : '3',
            g4 : '4',
            g5 : '5',
            g6 : '6'
        };
        $scope.$on('type', function(e, val) {
            /*val = val.toLowerCase();*/
            val = maps[val];  //  动态获取对象属性
            $scope.type = val;
        });
        $scope.kind = '1';
        $scope.pictures = [];
        $scope.type = '';
        $scope.producttype = [
            { name: '所有', id: '', className: 'activee' },
            { name: '太阳镜', id: '1', className: '' },
            { name: '防辐射眼镜', id: '2', className: ''},
            { name: '光学镜', id: '3', className: ''},
            { name: '游泳镜', id: '4', className: ''},
            { name: '装饰眼镜', id: '5', className: '' },
            { name: '老花镜', id: '6', className: '' }
        ];
        $scope.select = function(index, id) {
            $scope.producttype.forEach(function(item, i) {
                if (index === i) {
                    item.className = 'active';
                } else {
                    item.className = '';
                }
            });
            $scope.type = '' + id;
        };
        model.getProduct('1').then(function(res) {
            if (res.status === 200) {
               $scope.pictures = res.data.data; 
            }
        });
    }]);