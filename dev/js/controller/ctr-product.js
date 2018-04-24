/**
 * 
 */
'use strict';
angular.module('app')
    .controller('product', ['$scope', 'current', function($scope, current) {
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
        $scope.glassestype = [
            { name: '太阳镜', id: '1' },
            { name: '防辐射', id: '2' },
            { name: '眼镜太', id: '3' },
            { name: '光学镜', id: '4' },
            { name: '装饰眼镜', id: '5' },
            { name: '老花镜', id: '6' }
        ];
    }]);