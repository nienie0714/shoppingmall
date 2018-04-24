/**
 * Created by rorywu
 */
'use strict';
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var rootPath = '/dist/html/';
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: rootPath + 'home.html',
                controller: 'home'
            })
            .state('agent', {
                url: '/agent',
                templateUrl: rootPath + 'agent.html',
                controller: 'agent'
            })
            .state('product', {
                url: '/product',
                templateUrl: rootPath + 'product.html',
                controller: 'product'
            })
            .state('book', {
                url: '/book',
                templateUrl: rootPath + 'home.html',
                controller: 'book'
            });

    }]);