app.controller("authController", ["$scope", "$location",
    function ($scope, $location) {
        $scope.coucou = "COUCOU";

        $scope.registration = function () {
            $location.path("/registration");
        };
    }]);