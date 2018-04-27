/**
 * 
 */
'use strict';
angular.module('app')
    .controller('bags', ['$scope', 'productModel', function($scope, model) {
        var maps = {
            b1: '1',
            b2: '2',
            b3: '3',
            b4: '4',
            b5: '5',
            b6: '6',
            b7: '7',
            b8: '8'
        };
        $scope.$on('type', function(e, val) {
            /*val = val.toLowerCase();*/
            val = maps[val];  //  动态获取对象属性
            $scope.type = val;
        });
        $scope.kind = '3';
        $scope.pictures = [];
        $scope.type = '';
        $scope.producttype = [
            { name: '所有', id: '', className: 'active' },
            { name: 'Hermes', id: '1', className: '' },
            { name: 'LV', id: '2', className: ''},
            { name: 'CHANEL', id: '3', className: ''},
            { name: 'Prada', id: '4', className: ''},
            { name: 'BottegaVeneta', id: '5', className: '' },
            { name: 'Fendi', id: '6', className: '' },
            { name: 'Gucci', id: '7', className: '' },
            { name: 'Dior', id: '8', className: '' }
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
        model.getProduct('3').then(function(res) {
            if (res.status === 200) {
               $scope.pictures = res.data.data; 
            }
        });
    }]);