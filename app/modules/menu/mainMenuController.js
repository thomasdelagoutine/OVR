/**
 * Created by Thomas on 14/08/2017.
 */
app.controller("mainMenuController", ["$scope", "$location", "mainService",
    function ($scope, $location, mainService) {
        var user = mainService.checkIfUserSignIn();
        if (!user) {
            $location.path("/connexion");

        }

        $scope.openTrace = function () {
            $location.path("/trace");
        }

    }]);

