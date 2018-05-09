/**
 * 
 */
'use strict';
angular.module('app')
    .controller('home', ['$scope', function($scope) {
        $scope.model = 'Home';
        //drawCanvas();
        $(document).ready(function() {
            $('#demo-pie-1').pieChart({
                barColor: '#3bb2d0',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 8,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-2').pieChart({
                barColor: '#fbb03b',
                trackColor: '#eee',
                lineCap: 'butt',
                lineWidth: 8,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-3').pieChart({
                barColor: '#ed6498',
                trackColor: '#eee',
                lineCap: 'square',
                lineWidth: 8,
                onStep: function(from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
        });
        /*var t;
        var index = 0;
        // 自动播放
        t = setInterval(play, 5000);

        // 播放
        function play() {
            index++;
            if (index > 7) {
                index = 0;
            }
            //alert(index);
            $('.lunbobox ul li').eq(index - 1).css({
                "background": "#999",
                "border": "1px solid #fffff"
            }).siblings().css({
                "background": "#cccccc"
            })
            $(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        };*/
    }]);