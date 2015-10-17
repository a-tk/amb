(function () {
    'use strict';

    angular
        .module('app', ['ngAnimate', 'ngRoute'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/',{ templateUrl: 'app/users/users.html', title: 'users'})
            .when('/posts',{ templateUrl: 'app/posts/posts.html', title: 'posts'})
            .otherwise({ redirectTo: '/' });
    }
})();