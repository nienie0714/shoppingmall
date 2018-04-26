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
                url: '/details/{kind}/{type}',
                templateUrl: rootPath + 'details.html',
                controller: 'details'
            });

    }]);