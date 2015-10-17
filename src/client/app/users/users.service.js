(function () {
    'use strict';

    angular
        .module('app')
        .factory('usersService', usersService);

    function usersService() {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {
            return ['nothing yet']

        }
    }
})();