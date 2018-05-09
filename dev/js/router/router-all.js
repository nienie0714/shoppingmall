/**
 * Created by rorywu
 */
'use strict';
angular.module('app')
    //  $stateProvider 服务提供者，用来配置路由
    // $urlRouterProvider  服务提供者，用来配置路由重定向
    //在这里有两个主要目的。一是建立一个默认路由，用于管理未知的URL（统一跳转到某处）。
    // 二是监听浏览器地址栏URL的变化，重定向到路由定义的状态中。
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var rootPath = '/dist/html/';
        //没有配置的状态就可以跳到 /home状态
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: rootPath + 'home.html',
                controller: 'home'
            })
            .state('bags', {
                url: '/bags',
                templateUrl: rootPath + 'bags.html',
                controller: 'bags'
            })
            .state('glasses', {
                url: '/glasses',
                templateUrl: rootPath + 'glasses.html',
                controller: 'glasses'
            })
            .state('shoes', {
                url: '/shoes',
                templateUrl: rootPath + 'shoes.html',
                controller: 'shoes'
            })
            .state('details', {
                url: '/details/:kind/{type}',
                templateUrl: rootPath + 'details.html',
                controller: 'details'
            })
            .state('login', {
                url: '/login',
                templateUrl: rootPath + 'login.html',
                controller: 'login'
            })
            .state('orderinfo', {
                url: '/orderinfo',
                templateUrl: rootPath + 'orderinfo.html',
                controller: 'orderinfo'
            });

    }]);

/*
路由的查找匹配

angular 在刚开始的 $digest 时，$rootScope 会触发 $locationChangeSuccess 事件（angular 在每次浏览器 hash change 的时候也会触发 $locationChangeSuccess 事件）
ui.router 监听了 $locationChangeSuccess 事件，于是开始通过遍历一系列 rules，进行路由查找匹配列表项
当匹配到路由后，就通过 $state.transitionTo(state,...)，跳转激活对应的 state
最后，完成数据请求和模板的渲染
在视图中，建议使用 ui-sref="xxxState" 而不是 href="#/abc"，这样做能减少一遍 rules循环的遍历，提升性能。
 -->

 */