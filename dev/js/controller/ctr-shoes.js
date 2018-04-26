/**
 * 
 */
'use strict';
angular.module('app')
    .controller('shoes', ['$scope', 'current', function($scope, current) {
        // ?
        current();
        var maps = {
            aj1 : '1',
            aj2 : '2',
            aj3 : '3',
            aj4 : '4',
            aj5 : '5',
            aj6 : '6'
        };
        $scope.$on('type', function(e, val) {
            val = val.toLowerCase();
            val = maps[val];  //  动态获取对象属性
            $scope.type = val;
        });
        $scope.kind = '2';
        $scope.pictures = [
        	{
                img: 'dist/images/s1.jpg',
                type: '1'
            },
            {
                img: 'dist/images/s2.jpg',
                type: '2'
            },
            {
                img: 'dist/images/s3.jpg',
                type: '3'
            },
            {
                img: 'dist/images/s4.jpg',
                type: '4'
            },
            {
                img: 'dist/images/s5.jpg',
                type: '5'
            },
            {
                img: 'dist/images/s6.jpg',
                type: '6'
            },
            {
                img: 'dist/images/s1.jpg',
                type: '1'
            },
            {
                img: 'dist/images/s2.jpg',
                type: '2'
            },
            {
                img: 'dist/images/s3.jpg',
                type: '3'
            },
            {
                img: 'dist/images/s4.jpg',
                type: '4'
            },
            {
                img: 'dist/images/s5.jpg',
                type: '5'
            }
        ];
        $scope.type = '';
        $scope.producttype = [
            { name: '所有', id: '', className: 'active' },
            { name: 'AJ1', id: '1', className: '' },
            { name: 'AJ2', id: '2', className: ''},
            { name: 'AJ3', id: '3', className: ''},
            { name: 'AJ4', id: '4', className: ''},
            { name: 'AJ5', id: '5', className: '' },
            { name: 'AJ6', id: '6', className: '' }
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