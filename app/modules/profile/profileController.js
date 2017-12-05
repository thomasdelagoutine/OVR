/**
 * Created by Thomas on 26/08/2017.
 */
app.controller('profileController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.profilePhoto = null;
        $scope.profilePhotoToDisplay = null;
        $scope.name = "";
        $scope.surname ="";
        $scope.city ="";

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
            var currentUser = firebase.auth().currentUser;
            if ($scope.name !== "" && $scope.surname !== "" && $scope.city !== "" ){
                firebase.database().ref('user/' + currentUser.uid).set({
                    username:  currentUser.displayName,
                    surname : $scope.surname,
                    name: $scope.name,
                    city: $scope.city
                });
            }else{
                console.log("champs vide");
            }
        }

    }]);