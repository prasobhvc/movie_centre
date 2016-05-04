"use script";
angular.module('movieCenter', []);
angular.module('movieCenter').controller('MainController', ['$scope', '$interval', function ($scope, $interval) {
        var item = ["banana", "apple", "peach", "orange", "plum"];
        $scope.movieIndex = null;
        $scope.currentMovie = "";
        
        $scope.getItem = function(){
            $scope.currentItem = item[$scope.itemIndex];
        };
    }]);

