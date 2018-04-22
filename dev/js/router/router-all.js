/**
 * Created by rorywu
 */
'use strict';
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var rootPath = '/dist/html/';
        $urlRouterProvider.otherwise('/');
        $stateProvider
       		 .state('dashboard', {
                url: '/dashboard',
                templateUrl: rootPath + 'dashboard.html',
                controller: 'dashboard'
            })
            .state('agent', {
                url: '/agent',
                templateUrl: rootPath + 'agent.html',
                controller: 'agent'
            })
            .state('cruise', {
                url: '/cruise',
                templateUrl: rootPath + 'dashboard.html',
                controller: 'cruise'
            })
            .state('help', {
                url: '/help',
                templateUrl: rootPath + 'dashboard.html',
                controller: 'help'
            });
            
    }]);