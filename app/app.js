/**
 * Created by Thomas on 23/07/2017.
 */
var app = angular.module('ovrApp', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {

        // Système de routage
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'dashBoardController'
            })
            .when('/connexion', {
                templateUrl: 'modules/connexion/authentification.html',
                controller: 'authController as auth'
            })
            .when('/registration', {
                templateUrl: 'modules/registration/registration.html',
                controller: 'registrationController'
            })
            .when('/mainMenu', {
                templateUrl: 'modules/menu/mainMenu.html',
                controller: 'mainMenuController'
            })
            .when('/profile', {
                templateUrl : 'modules/profile/profile.html',
                controller: 'profileController'
            })
            .when('/trace', {
                templateUrl : 'modules/trace/trace.html',
                controller: 'traceController'
            })
            .otherwise({
                redirectTo: '/connexion'
            });
    }
]);
