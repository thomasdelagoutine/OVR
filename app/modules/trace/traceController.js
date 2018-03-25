/**
 * Created by Thomas on 03/02/2018.
 */
app.controller("traceController", ["$scope", "$location", "mainService", "$timeout",
    function ($scope, $location, mainService, $timeout) {
        var user = mainService.user;
        if (user) {
            $location.path("/connexion");
        } else {
            initMap();
        }
        function initMap() {
            var triby = {lat: 43.456454, lng: 2.445355};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: triby
            });
            var marker = new google.maps.Marker({
                position: triby,
                map: map
            });
        }

    }]);




