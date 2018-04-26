/**
 * 
 */
'use strict';
angular.module('app')
    .controller('details', ['$scope', 'current', '$state', 'productModel', function($scope, current, $state, model) {
        current();
        var kind = $state.params.kind;
        var type = $state.params.type;
        $scope.product = [];
        model.getProduct(kind).then(function(res) {
            if (res.status === 200) {
               var data = res.data.data;
               $scope.product = data.filter(function(item) {
                    return item.type === type;
               });
               console.log($scope.product);
            }
        });
    }]);
/*var app = angular.module('app');
app.directive ("hello", function() {
    return {
        restrict: 'E',
        templateUrl: '<button ng-click="asd()" style="background-color: {{col}}">click me</button>',
        scope: {
        	col: '=color',
        	asd: '&ss'
        },
        link: function(scope, elements, attrs) {
            elements.bind('click', function() {
                scope.col = 'blue',
                scope.$apply();
            });
        }
    }
});*/