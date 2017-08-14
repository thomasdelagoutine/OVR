app.controller("authController", ["$scope", "$location",
    function ($scope, $location) {
        // Test if the user is connected
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                $location.path("/mainMenu");
                $scope.$apply();
            }
        });
        $scope.coucou = "COUCOU";
        $scope.errorSignIn = false;


        /**
         * Go to registration page
         */
        $scope.registration = function () {
            $location.path("/registration");
        };

        $scope.signIn = function () {
            var email = $scope.email;
            var password = $scope.password;
            console.log(email + " " + password);
            firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
                console.log("Ok");
                $location.path("/mainMenu");
                $scope.$digest();
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                $scope.errorSignIn = true;
                $scope.signInError = "Mot de passe ou identifiant incorrect";
                $scope.$apply();
            });
        }
    }]);