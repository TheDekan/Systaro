var app = angular.module('mail', ['ngResource', 'ngGrid', 'ui.bootstrap']);

app.controller('emailController', function ($scope ) {

    $scope.part1 = null;
    $scope.part2 = null;
    $scope.mailTo = null;

    var regex = '(.*)@(.*)';

    $scope.myFunc = function() {
        var result = $scope.mail.match(regex);
        $scope.part1 = result[1];
        $scope.part2 = result[2];
        $scope.mailTo = 'mailto:' + $scope.mail;
    };

});