/**
 * 
 */
'use strict';
angular.module('app')
    .controller('glasses', ['$scope', 'productModel', function($scope, model) {
        var maps = {
            '太阳镜': '1',
            '防射眼镜': '2',
            '光学镜': '3',
            '游泳镜': '4',
            '装饰眼镜': '5',
            '老花镜': '6'
        };
        var scope = {
            kind: 1,
            pictures: [],
            type: '',
            producttype: []
        };
        // 把scope里的内容加入到$scope
        $scope = angular.extend($scope, scope);

        // 渲染视图，factory服务，mod-product.js
        model.render($scope, maps, $scope.kind);
    }]);
