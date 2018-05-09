/**
 * 
 */
'use strict';
angular.module('app')
	.factory('productModel', ['$http', function($http) {
		var rootpath = 'dist/json';
		return {
			// 得到json文件
			getProduct: function(kind) {
				kind = '' + kind;
				return $http({
					url: rootpath + '/product_' + kind + '.json',
					method: 'get'
				});
			},
			// 渲染视图      scope  搜索框  种类123
			render: function(scope, maps, kind) {
				var that = this;

				// $on用于接收main.js里的搜索框了的event与data
				scope.$on('type', function(e, val) {
		            val = maps[val];  //  动态获取对象属性
		            scope.type = val;
        		});
        		// 点击product的menu时，改变样式，<a>加阴影
        		scope.select = function(index, id) {
		            scope.producttype.forEach(function(item, i) {
		                if (index === i) {
		                    item.className = 'active';
		                } else {
		                    item.className = '';
		                }
		            });
		            scope.type = '' + id;
		        };
		        that.getProduct(kind).then(function(res) {
		            if (res.status === 200) {
		               scope.pictures = res.data.data; 
		               scope.producttype = res.data.producttype; 
		            }
		        });
			},
			// 得到json文件, 填充到order
			getOrder: function() {
				return $http({
					url: rootpath + '/orderInfo.json',
					method: 'get'
				});
			}
		};
	}]);
	