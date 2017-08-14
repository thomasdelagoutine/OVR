/**
 * Created by Thomas on 23/07/2017.
 */
app.run(function ($rootScope) {

});


app.controller('mainCtrl', ['$scope', '$location',
    function ($scope, $location) {

        /**
         * General function used to sign out current user.
         */
        $scope.signOut = function () {
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
            var user = firebase.auth().currentUser;

            if (user) {
                return true;
            } else {
                return false;
            }
        }

    }]);


