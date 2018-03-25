/**
 * Created by Thomas on 28/12/2017.
 */
app.service("mainService", ["$location", "$firebaseAuth", function ($location, $firebaseAuth) {
    var self = this;
    self.user = null;
    self.signOut = function () {

    };

    self.checkIfUserSignIn = function () {
        var user = $firebaseAuth().$getAuth();
        return user;
    };
    
}]);