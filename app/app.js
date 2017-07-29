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
                templateUrl: 'views/connexion.html',
                controller: 'authController'
            })
            .when('/inscription', {
                templateUrl: 'views/inscription.html',
                controller: 'inscriptionController'
            })
            .otherwise({
                redirectTo: '/connexion'
            });
    }
]);
