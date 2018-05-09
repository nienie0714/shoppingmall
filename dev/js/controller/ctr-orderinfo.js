/**
 * 
 */
'use strict';
angular.module('app')
	.controller('orderinfo', ['$scope', 'productModel', function($scope, model) {
       
        model.getOrder().then(function(res) {
            if (res.status === 200) {
               $scope.orderlist = res.data.orderlist;
            }
        });

        //  $scope.orderlist = [{
        // 	productimg: '$scope.order[0].productimg',
        // 	productname: '$scope.order[0].productname',
        // 	color: '$scope.order[0].color',
        // 	perprice: '$scope.order[0].perprice',
        // 	count: '$scope.order[0].count',
        // 	price:'$scope.order[0].price'
        // }];

	}]);