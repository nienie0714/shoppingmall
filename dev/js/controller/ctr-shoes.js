/**
 * 
 */
'use strict';
angular.module('app')
    .controller('shoes', ['$scope', 'productModel', function($scope, model) {
        var maps = {
            aj1: '1',
            aj2: '2',
            aj3: '3',
            aj4: '4',
            aj5: '5',
            aj6: '6'
        };
        var scope = {
            kind: 2,
            pictures: [],
            type: '',
            producttype: []
        };
        // 把scope里的内容加入到$scope
        $scope = angular.extend($scope, scope);
        model.render($scope, maps, $scope.kind);
    }]);