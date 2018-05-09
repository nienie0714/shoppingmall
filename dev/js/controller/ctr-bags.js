/**
 * 
 */
'use strict';
angular.module('app')
    .controller('bags', ['$scope', 'productModel', function($scope, model) {
        var maps = {
            Hermes: '1',
            LV: '2',
            CHANEL: '3',
            Prada: '4',
            BottegaVeneta: '5',
            Fendi: '6',
            Gucci: '7',
            Dior: '8'
        };
        var scope = {
            kind: 3,
            pictures: [],
            type: '',
            producttype: []
        };
        // 把scope里的内容加入到$scope
        $scope = angular.extend($scope, scope);
        model.render($scope, maps, $scope.kind);
    }]);