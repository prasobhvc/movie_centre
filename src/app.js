"use script";
angular.module('movieCenter', []);
angular.module('movieCenter').controller('MainController', ['$scope', '$interval', function ($scope, $interval) {
        var items = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"];
        $scope.movieIndex = null;
        $scope.currentMovie = "";

        $scope.getItem = function () {
            $scope.currentMovie = items[$scope.movieIndex];
        };

        $interval(function () {
            $scope.movieIndex = Math.round(Math.random() * (items.length - 1));
            $scope.getItem();
        }, 2000);
    }]);

