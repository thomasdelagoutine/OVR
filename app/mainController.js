/**
 * Created by Thomas on 23/07/2017.
 */
app.run(function ($rootScope) {

});


app.controller('mainCtrl', ['$scope', '$location',
    function ($scope, $location) {
        //Variables
        $scope.isDisplayProfileMenu = false;

        /**
         * General function used to sign out current user.
         */
        $scope.signOut = function () {
            $scope.displayProfileMenu();
            firebase.auth().signOut().then(function () {
                $location.path("/connexion");
                $scope.$apply();
            }).catch(function (error) {
                // An error happened.
            });
        };

        /**
         * Function to check if the user is connected.
         */
        $scope.checkIfUserSignIn = function () {
            $scope.user = firebase.auth().currentUser;
            return $scope.user;
        };


        /**
         * Function to display the menu.
         */
        $scope.displayProfileMenu = function () {
            $scope.isDisplayProfileMenu = !$scope.isDisplayProfileMenu;
        };

        /**
         *
         */
        $scope.openProfile = function () {
            $scope.displayProfileMenu();
            $location.path("/profile");
        }
    }]);


