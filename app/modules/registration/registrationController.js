/**
 * Created by Thomas on 13/08/2017.
 */
app.controller('registrationController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.inscriptionError = "";
        $scope.errorRegistration = false;
        $scope.emailSent = true;

        /**
         * Function used to register a new user. Works with E-mail.
         */
        $scope.register = function () {
            console.log("blabla");
            if (($scope.login === undefined || $scope.name === undefined ||
                $scope.surname === undefined || $scope.email === undefined ||
                $scope.password === undefined || $scope.password2 === undefined) ||
                ($scope.login === "" || $scope.name === "" ||
                $scope.surname === "" || $scope.email === "" ||
                $scope.password === "" || $scope.password2 === "")) {
                $scope.inscriptionError = "Renseignez tous les champs";
                $scope.errorRegistration = true;
            }
            else {
                $scope.errorRegistration = false;
                firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).then(function () {
                    firebase.auth().currentUser.sendEmailVerification().then(function () {
                        // Email Verification sent!
                        console.log('Verification du mail envoyé !');
                        $scope.emailSent = true;
                        $scope.$apply();
                    }).catch(function (error) {
                        console.log(error);
                    });
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode + " Message : " + errorMessage);
                });
            }
        }
    }]);

