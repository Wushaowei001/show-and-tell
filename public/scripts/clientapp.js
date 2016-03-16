var myApp = angular.module('myApp', ['ngRoute', 'ngFileUpload']);

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
            controller: 'ProjectController'
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