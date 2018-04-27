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
        // Can also be used with $(document).ready()
        // $(window).load(function() {
        //     $('.flexslider').flexslider({
        //         animation: "slide",
        //         controlNav: "thumbnails"
        //     });
        // });
    }]);