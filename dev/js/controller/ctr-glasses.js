/**
 * 
 */
'use strict';
angular.module('app')
    .controller('glasses', ['$scope', 'productModel', function($scope, model) {
        var maps = {
            g1: '1',
            g2: '2',
            g3: '3',
            g4: '4',
            g5: '5',
            g6: '6'
        };
        $scope.$on('type', function(e, val) {
            /*val = val.toLowerCase();*/
            val = maps[val]; //  动态获取对象属性
            $scope.type = val;
        });
        $scope.kind = '1';
        $scope.pictures = [];
        $scope.type = '';
        $scope.producttype = [
            { name: '所有', id: '', className: 'activee' },
            { name: '太阳镜', id: '1', className: '' },
            { name: '防辐射眼镜', id: '2', className: '' },
            { name: '光学镜', id: '3', className: '' },
            { name: '游泳镜', id: '4', className: '' },
            { name: '装饰眼镜', id: '5', className: '' },
            { name: '老花镜', id: '6', className: '' }
        ];
        $scope.select = function(index, id) {
            $scope.producttype.forEach(function(item, i) {
                if (index === i) {
                    item.className = 'active';
                } else {
                    item.className = '';
                }
            });
            $scope.type = '' + id;
        };
        model.getProduct('1').then(function(res) {
            if (res.status === 200) {
                $scope.pictures = res.data.data;
            }
        });
        
        /*$('.item_price').on('click', function() {
            var cart = $('.cart');
            var imgtodrag = $(.grids_img).find('img').eq(0);
            if (imgtodrag) {
                var imgclone = imgtodrag.clone().offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                }).css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                }).appendTo($('body')).animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');
                setTimeout(function() {
                    cart.effect('shake', { times: 2 }, 200);
                }, 1500);
                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function() {
                    $(this).detach();
                });
            }
        });*/
    }]);