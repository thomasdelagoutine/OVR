/**
 * Created by Thomas on 26/08/2017.
 */
app.controller('profileController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.profilePhoto = null;
        $scope.profilePhotoToDisplay = null;
        $scope.displayConfirmationMessage = false;
        var currentUser = firebase.auth().currentUser;
        _getProfileInfo();

        $scope.isImage = function (ext) {
            if (ext) {
                return ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png"
            }
        };

        function readURL(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah').attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").change(function () {
            readURL(this);
        });


        $scope.updateProfile = function () {
            console.log($scope.name);
            currentUser = firebase.auth().currentUser;
            if ($scope.name !== "" && $scope.surname !== "" && $scope.city !== "") {
                firebase.database().ref('user/' + currentUser.uid).set({
                    username: currentUser.displayName,
                    surname: $scope.surname,
                    name: $scope.name,
                    city: $scope.city
                });
                $scope.displayConfirmationMessage = true;
            } else {
                console.log("champs vide");
            }
        };

        function _getProfileInfo() {
            return firebase.database().ref('/user/' + currentUser.uid).once('value').then(function (snapshot) {
                var aProfile = snapshot.val();
                $scope.name = aProfile.name;
                $scope.surname = aProfile.surname;
                $scope.city = aProfile.city;
                $scope.$apply();
            });
        }

    }]);