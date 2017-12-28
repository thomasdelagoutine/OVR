/**
 * Created by Thomas on 28/12/2017.
 */
app.service("profileService", ["$location", function ($location) {
    var self = this;

    self.updateProfile = function (pCurrentUserUid, pDisplayName, pSurname, pName, pCity) {
        firebase.database().ref('user/' + pCurrentUserUid).set({
            username: pDisplayName,
            surname: pSurname,
            name: pName,
            city: pCity
        });
    }
}]);