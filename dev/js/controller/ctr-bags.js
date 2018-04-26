/**
 * 
 */
'use strict';
angular.module('app')
    .controller('bags', ['$scope', 'current', function($scope, current) {
        // ?
        current();
        var maps = {
            b1 : '1',
            b2 : '2',
            b3 : '3',
            b4 : '4',
            b5 : '5',
            b6 : '6',
            b6 : '7',
            b6 : '8'
        };
        $scope.$on('type', function(e, val) {
            /*val = val.toLowerCase();*/
            val = maps[val];  //  动态获取对象属性
            $scope.type = val;
        });
        $scope.pictures = [
        	{
                img: 'dist/images/b1.jpg',
                type: '1'
            },
            {
                img: 'dist/images/b2.jpg',
                type: '2'
            },
            {
                img: 'dist/images/b3.jpg',
                type: '3'
            },
            {
                img: 'dist/images/b4.jpg',
                type: '4'
            },
            {
                img: 'dist/images/b5.jpg',
                type: '5'
            },
            {
                img: 'dist/images/b6.jpg',
                type: '6'
            },
            {
                img: 'dist/images/b7.jpg',
                type: '7'
            },
            {
                img: 'dist/images/b8.jpg',
                type: '8'
            },{
                img: 'dist/images/b1.jpg',
                type: '1'
            },
            {
                img: 'dist/images/b2.jpg',
                type: '2'
            },
            {
                img: 'dist/images/b3.jpg',
                type: '3'
            },
            {
                img: 'dist/images/b4.jpg',
                type: '4'
            },
            {
                img: 'dist/images/b5.jpg',
                type: '5'
            },
            {
                img: 'dist/images/b6.jpg',
                type: '6'
            },
            {
                img: 'dist/images/b7.jpg',
                type: '7'
            },
            {
                img: 'dist/images/b8.jpg',
                type: '8'
            }
        ];
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

    }]);