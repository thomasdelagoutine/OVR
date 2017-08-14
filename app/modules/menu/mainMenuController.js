/**
 * Created by Thomas on 14/08/2017.
 */
app.controller('mainMenuController', ['$scope', '$location',
    function ($scope, $location) {
        if (!$scope.$parent.checkIfUserSignIn()) {
            $location.path("/connexion");
            $scope.$digest();
        }
    }]);

