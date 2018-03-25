/**
 * Created by Thomas on 23/07/2017.
 */
app.run(function ($rootScope) {

});


app.controller('mainCtrl', ['$scope', '$location', '$firebaseObject','$firebaseAuth',
    function ($scope, $location, $firebaseObject, $firebaseAuth) {
        var ref = firebase.database().ref();
        // download the data into a local object
        $scope.data = $firebaseObject(ref);
        var auth = $firebaseAuth();
        //Variables
        $scope.isDisplayProfileMenu = false;

        /**
         * General function used to sign out current user.
         */
        $scope.signOut = function () {
            $scope.displayProfileMenu();
            auth.$signOut().then(function () {
                $location.path("/connexion");
            }).catch(function (error) {
                // An error happened.
            });
        };

        /**
         * Function to check if the user is connected.
         */
        $scope.checkIfUserSignIn = function () {
            $scope.user = auth.$getAuth();
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


