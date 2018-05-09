/**
 * 
 */
'use strict';
angular.module('app')
    .controller('details', ['$scope', '$state', 'productModel', function($scope, $state, model) {
        var kind = $state.params.kind;
        var type = $state.params.type;
        $scope.product = [];
        var maps = {
            '1': 'GLASSES',
            '2': 'SHOES',
            '3': 'BAGS'
        };
        $scope.productType = maps[kind];
        model.getProduct(kind).then(function(res) {
            if (res.status === 200) {
                var data = res.data.data;
                $scope.product = data.filter(function(item) {
                    return item.type === type;
                });
                console.log($scope.product);
                //console.log($scope.product);
            }
        });

        // 还没有解决轮播下一个就跳转到另一个页面的问题 <a><span>...</span></a>
        // app.directive('foodDirective', function() {
        //     return {
        //         restrict: 'E',
        //         replace: true,
        //         templateUrl: 'ml/food-detail.html', //路径根据此指令所在html文件选择
        //         link(scope, el, atr) {
        //             el.on('click', 'header', function(e) {
        //                 e.stopPropagation(); //防止冒泡
        //                 e.preventDefault(); //防止默认行为
        //                 var height = $('body').height() - $('#header').height() - $('#footer').height();
        //                 $(this).closest('.mask').siblings('.js-card-content').css({
        //                     width: '100%',
        //                     height: height,
        //                     opacity: 1,
        //                     zIndex: 1
        //                 });
        //             });
        //         }
        //     }

    }]);