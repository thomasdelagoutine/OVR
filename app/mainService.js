/**
 * Created by Thomas on 28/12/2017.
 */
app.service("mainService",["$location",function ($location) {
    var self = this;
    
    self.signOut = function () {
        
    };
    
    self.checkIfUserSignIn = function () {
        var user = firebase.auth().currentUser;
        return user;
    };
}]);