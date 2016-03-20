var myApp = angular.module('myApp', ['ngRoute', 'ngFileUpload', 'wu.masonry']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/student', {
            templateUrl: '/views/templates/student.html',
            controller: 'StudentController'
        })
        .when('/results', {
            templateUrl: '/views/templates/results.html',
            controller: 'StudentController'
        })
        .when('/project', {
            templateUrl: '/views/templates/project.html',
            controller: 'StudentController'
        })
        .when('/project1', {
            templateUrl: '/views/templates/project1.html',
            controller: 'StudentController'
        })
        .when('/project2', {
            templateUrl: '/views/templates/project2.html',
            controller: 'StudentController'
        })
        .when('/project3', {
            templateUrl: '/views/templates/project3.html',
            controller: 'StudentController'
        })
        .when('/project4', {
            templateUrl: '/views/templates/project4.html',
            controller: 'StudentController'
        })
        .when('/project5', {
            templateUrl: '/views/templates/project5.html',
            controller: 'StudentController'
        })
        .when('/update', {
            templateUrl: '/views/templates/update.html',
            controller: 'StudentController'
        })
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);


// .js file that shows the views