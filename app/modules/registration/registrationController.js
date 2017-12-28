/**
 * Created by Thomas on 13/08/2017.
 */
app.controller('registrationController', ['$scope', 'profileService',
    function ($scope, profileService) {
        $scope.inscriptionError = "";
        $scope.errorRegistration = false;
        $scope.emailSent = false;

        /**
         * Function used to register a new user. Works with E-mail.
         */
        $scope.register = function (event) {
            event.preventDefault();
            if (($scope.name === undefined ||
                $scope.surname === undefined || $scope.email === undefined ||
                $scope.password === undefined || $scope.password2 === undefined) ||
                ($scope.name === "" ||
                $scope.surname === "" || $scope.email === "" ||
                $scope.password === "" || $scope.password2 === "")) {
                $scope.inscriptionError = "Renseignez tous les champs";
                $scope.errorRegistration = true;
            }
            else {
                if ($scope.password !== $scope.password2) {
                    $scope.inscriptionError = "Les mots de passes sont différents !";
                    $scope.errorRegistration = true;
                }
                else {
                    $scope.errorRegistration = false;
                    firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).then(function () {
                        var user = firebase.auth().currentUser;
                        var displayName = $scope.surname + " " + $scope.name;
                        user.updateProfile({
                            displayName: displayName
                        }).then(function () {
                            profileService.updateProfile(user.uid, displayName, $scope.surname, $scope.name, $scope.city);
                            user.sendEmailVerification().then(function () {
                                // Email Verification sent!
                                console.log('Verification du mail envoyé !');
                                firebase.auth().signOut().then(function () {
                                    $scope.emailSent = true;
                                    $scope.$digest();
                                }).catch(function (error) {
                                    console.log(error);
                                    $scope.inscriptionError = error.message;
                                    $scope.errorRegistration = true;
                                    $scope.$digest()
                                });

                            }).catch(function (error) {
                                console.log(error);
                                $scope.inscriptionError = error.message;
                                $scope.errorRegistration = true;
                                $scope.$digest();
                            });
                        }).catch(function (error) {
                            console.log(error);
                            $scope.inscriptionError = error.message;
                            $scope.errorRegistration = true;
                            $scope.$digest()
                        });

                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode + " Message : " + errorMessage);
                        $scope.inscriptionError = error.message;
                        $scope.errorRegistration = true;
                        $scope.$digest();
                    });
                }
            }
        }
    }]);

