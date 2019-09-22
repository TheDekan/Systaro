var app = angular.module('posts', ['ngResource', 'ngGrid', 'ui.bootstrap']);

app.controller('postListController', function ($scope, $rootScope, postsFactory) {
    $scope.posts = postsFactory.query();

    $scope.gridOptions = {
        data: 'filteredPosts',

        columnDefs: [
            { field: 'title', displayName: 'title' },
            { field: 'body', displayName: 'text' }
        ],

        multiSelect: false,
        selectedItems: [],

        afterSelectionChange: function (rowItem) {
            if (rowItem.selected) {
                $rootScope.$broadcast('postSelected', $scope.gridOptions.selectedItems[0].id, $scope.gridOptions.selectedItems[0].title);
            }
        }
    };

    $scope.itemsPerPage = 20;
    $scope.currentPage = 1;

    $scope.pageCount = function () {
        return Math.ceil($scope.posts.length / $scope.itemsPerPage);
    };

    $scope.posts.$promise.then(function () {
        $scope.totalItems = $scope.posts.length;
        $scope.$watch('currentPage + itemsPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.filteredPosts = $scope.posts.slice(begin, end);
        });
    });
});

app.controller('commentsFormController', function ($scope, $rootScope, commentsFactory) {

    $scope.comments = null;
    $scope.postId = null;
    $scope.postTitle = null;

    $scope.clearForm = function () {
        $scope.postId = null;
        $scope.postTitle = null;
        $scope.postsForm.$setPristine();
        $rootScope.$broadcast('clear');
    };

    $scope.$on('postSelected', function (event, id, title) {
        $scope.postId = id;
        $scope.postTitle = title;
        $scope.comments = commentsFactory.query({id: id});
    });

    $scope.gridOptions = {
        data: 'comments',

        columnDefs: [
            { field: 'name', displayName: 'author' },
            { field: 'email', displayName: 'mail' },
            { field: 'body', displayName: 'text' }
        ]
    };
});

app.factory('postsFactory', function($resource) {
    return $resource('https://jsonplaceholder.typicode.com/posts');
});

app.factory('singlePostFactory', function($resource) {
    return $resource('https://jsonplaceholder.typicode.com/posts?id=:id');
});

app.factory('commentsFactory', function($resource) {
    return $resource('https://jsonplaceholder.typicode.com/comments?postId=:id');
});