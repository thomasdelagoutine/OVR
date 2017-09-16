/**
 * Created by Thomas on 26/08/2017.
 */
app.controller('profileController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.profilePhoto = null;
        $scope.profilePhotoToDisplay = null;

        $scope.isImage = function(ext) {
            if(ext) {
                return ext == "jpg" || ext == "jpeg"|| ext == "gif" || ext=="png"
            }
        };

        function readURL(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").change(function(){
            readURL(this);
        });

    }]);