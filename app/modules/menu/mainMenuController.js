/**
 * Created by Thomas on 14/08/2017.
 */
app.controller('mainMenuController', ['$scope', '$location',
    function ($scope, $location) {
        var user = firebase.auth().currentUser;
        if (!user) {
            $location.path("/connexion");
            
        }

    }]);

