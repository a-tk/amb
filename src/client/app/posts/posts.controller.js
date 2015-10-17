(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostsCtrl', PostsCtrl);

    PostsCtrl.$inject = ['dataservice'];

    function PostsCtrl(dataservice) {
        /* jshint validthis: true */
        var vm = this;

        vm.getPosts = getPosts;
        vm.isActive = isActive;
        vm.posts = [];
        vm.selectedPost = undefined;
        vm.title = 'Posts';

        activate();

        function activate() {
            return getPosts();
        }

        function getPosts() {
            return dataservice.getPosts(0)
                .then(function(data){
                    vm.posts = data.data;
                    return vm.selectedPosts;
                });
        }

        function isActive(post) {
            return !!(vm.selectedPost === post);
        }
    }
})();