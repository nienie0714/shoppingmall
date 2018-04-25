/**
 * 
 */
'use strict';
angular.module('app')
    .controller('glasses', ['$scope', 'current', function($scope, current) {
        // ?
        current();
        $scope.model = 'Product';
        $scope.pictures = [
        	{
                img: 'dist/images/g1.jpg',
                type: '1'
            },
            {
                img: 'dist/images/g2.jpg',
                type: '2'
            },
            {
                img: 'dist/images/g3.jpg',
                type: '3'
            },
            {
                img: 'dist/images/g4.jpg',
                type: '4'
            },
            {
                img: 'dist/images/g5.jpg',
                type: '5'
            },
            {
                img: 'dist/images/g6.jpg',
                type: '6'
            },
            {
                img: 'dist/images/g1.jpg',
                type: '1'
            },
            {
                img: 'dist/images/g2.jpg',
                type: '2'
            },
            {
                img: 'dist/images/g3.jpg',
                type: '3'
            },
            {
                img: 'dist/images/g4.jpg',
                type: '4'
            },
            {
                img: 'dist/images/g5.jpg',
                type: '5'
            }
        ];
        $scope.type = '';
        $scope.glassestype = [
            { name: '所有', id: '', className: 'active' },
            { name: '太阳镜', id: '1', className: '' },
            { name: '防辐射眼镜', id: '2', className: ''},
            { name: '光学镜', id: '3', className: ''},
            { name: '游泳镜', id: '4', className: ''},
            { name: '装饰眼镜', id: '5', className: '' },
            { name: '老花镜', id: '6', className: '' }
        ];
        $scope.select = function(index, id) {
            $scope.glassestype.forEach(function(item, i) {
                if (index === i) {
                    item.className = 'active';
                } else {
                    item.className = '';
                }
            });
            $scope.type = '' + id;
        };

    }]);